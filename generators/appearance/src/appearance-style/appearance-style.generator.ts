/* eslint-disable n/no-sync */
import type { ColorSchemes }       from '../appearance.interfaces.js'

import assert                      from 'node:assert/strict'
import { writeFileSync }           from 'node:fs'

import { pretty }                  from '@atls-ui-generators/utils'

import { capitalizeFirstLetter }   from '../utils/index.js'
import { getAppearanceStylesName } from '../utils/index.js'

export class AppearanceStyleGenerator {
  readonly requiredImports = [
    { import: '{ vars }', from: '@ui/theme/theme-css' },
    { import: '{ createAppearanceStyles }', from: '@atls-ui-generators/appearance/create' },
  ]

  #variants: Array<string> = []

  #states: Array<string> = []

  constructor(
    private readonly prefix: string,
    private readonly colorSchemes: ColorSchemes
  ) {
    const colorsKeys = Object.keys(this.colorSchemes).filter((key) =>
      key.startsWith(`${this.prefix}.`))

    assert.ok(colorsKeys.length, `Not found color keys for prefix '${this.prefix}'`)

    colorsKeys.forEach((key) => {
      assert.match(
        key,
        /^[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+\.(font|background|border)$/,
        `Color key should match the pattern 'prefix.variant.state.type', where 'type' can be 'font', 'background', or 'border'. Received: '${key}'`
      )
    })

    const allVariants = colorsKeys.reduce<Array<string>>(
      (array, key) => [...array, key.split('.')[1]],
      []
    )

    this.#variants = [...new Set(allVariants)]

    const allStates = colorsKeys.reduce<Array<string>>(
      (array, key) =>
        key.startsWith(`${this.prefix}.${this.#variants[0]}`)
          ? [...array, key.split('.')[2]]
          : array,
      []
    )

    this.#states = [...new Set(allStates)]
  }

  async generateAppearanceStyles(): Promise<
    Record<'appearanceStyles' | 'imports' | 'statefulStyles', string>
  > {
    const statefulStyles = await pretty(
      this.#variants.map((variant) => this.generateVariantStatefulStyles(variant)).join('\n\n')
    )

    const appearanceStyles = await pretty(
      this.#states.map((state) => this.generateVariantAppearanceStyles(state)).join('\n\n')
    )

    const imports = await pretty(
      this.requiredImports
        .map((requiredImport) => `import ${requiredImport.import} from '${requiredImport.from}'`)
        .join('\n')
    )

    return { statefulStyles, appearanceStyles, imports }
  }

  async generateFile(path: string, filename = 'appearance.css.ts'): Promise<void> {
    const generated = await this.generateAppearanceStyles()

    const code = await pretty(`
    ${generated.imports}
    ${generated.statefulStyles}
    ${generated.appearanceStyles}
    `)

    if (path.split('').pop() === '/') {
      throw new Error("Path should not end with '/' character")
    }

    writeFileSync(`${path}/${filename}`, code)
  }

  private generateVariantStatefulStyles(variant: string): string {
    const lines: Array<string> = []

    for (const state of this.#states) {
      lines.push(`const ${getAppearanceStylesName(variant, state)} = createAppearanceStyles({
        fontColor: vars.colors['${this.prefix}.${variant}.${state}.font'],
        backgroundColor: vars.colors['${this.prefix}.${variant}.${state}.background'],
        borderColor: vars.colors['${this.prefix}.${variant}.${state}.border'],
      })`)
    }

    return lines.join('\n\n')
  }

  private generateVariantAppearanceStyles(state: string): string {
    if (state === 'default') {
      const variantStyles = this.#variants
        .map((variant) => `${variant}: ${getAppearanceStylesName(variant, 'Default')},`)
        .join('\n')

      return `export const appearanceVariant = {
        ${variantStyles}
      }`
    }

    const stateName = capitalizeFirstLetter(state)

    const variantStyles = this.#variants
      .map((variant) => `${variant}${stateName}: ${getAppearanceStylesName(variant, stateName)},`)
      .join('\n')

    return `export const appearance${stateName} = {
      ${variantStyles}
    }`
  }
}
