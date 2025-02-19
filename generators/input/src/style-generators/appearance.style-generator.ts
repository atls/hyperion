/* eslint-disable n/no-sync */
import type { InputColorSchemes }  from '../input-generator.interfaces.js'

import { writeFileSync }           from 'fs'

import { pretty }                  from '@atls-ui-generators/utils'

import { capitalizeFirstLetter }   from '../utils/index.js'
import { getAppearanceStylesName } from '../utils/index.js'

export class InputAppearanceStyleGenerator {
  readonly requiredImports = [
    { import: '{ vars }', from: '@ui/theme' },
    { import: '{ createAppearanceStyles }', from: '@atls-ui-parts/input' },
  ]

  #variants: Array<string> = []

  #states: Array<string> = []

  constructor(private readonly colorSchemes: InputColorSchemes) {
    const allVariants = Object.keys(colorSchemes).reduce<Array<string>>(
      (array, key) => (key.startsWith('input.') ? [...array, key.split('.')[1]] : array),
      []
    )

    this.#variants = [...new Set(allVariants)]

    const allStates = Object.keys(this.colorSchemes).reduce<Array<string>>(
      (array, key) =>
        key.startsWith(`input.${this.#variants[0]}`) ? [...array, key.split('.')[2]] : array,
      []
    )

    this.#states = [...new Set(allStates)]
  }

  generateAppearanceStyles(): Record<'appearanceStyles' | 'imports' | 'statefulStyles', string> {
    const statefulStyles = pretty(
      this.#variants.map((variant) => this.generateVariantStatefulStyles(variant)).join('\n\n')
    )

    const appearanceStyles = pretty(
      this.#states.map((state) => this.generateVariantAppearanceStyles(state)).join('\n\n')
    )

    const imports = pretty(
      this.requiredImports
        .map((requiredImport) => `import ${requiredImport.import} from '${requiredImport.from}'`)
        .join('\n')
    )

    return { statefulStyles, appearanceStyles, imports }
  }

  generateFile(path: string, filename = 'appearance.css.ts'): void {
    const generated = this.generateAppearanceStyles()

    const code = pretty(`
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
        fontColor: vars.colors['input.${variant}.${state}.font'],
        backgroundColor: vars.colors['input.${variant}.${state}.background'],
        borderColor: vars.colors['input.${variant}.${state}.border'],
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
