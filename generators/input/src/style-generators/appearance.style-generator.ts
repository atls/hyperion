import type { InputColorSchemes } from '../input-generator.interfaces.js'

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

  constructor(private readonly colorSchemes: InputColorSchemes) {
    const allVariants = Object.keys(colorSchemes).reduce<Array<string>>(
      (array, key) => (key.startsWith('input.') ? [...array, key.split('.')[1]] : array),
      []
    )

    this.#variants = [...new Set(allVariants)]
  }

  generateAppearanceStyles(): Record<'appearanceStyles' | 'imports' | 'statefulStyles', string> {
    const statefulStyles = pretty(
      this.#variants.map((variant) => this.generateVariantStatefulStyles(variant)).join('\n\n')
    )

    const appearanceStyles = pretty(`
      export const appearanceVariant = {
        ${this.generateVariantAppearanceStyles(this.#variants, 'Default', false)}
      }

      export const appearanceHover = {
        ${this.generateVariantAppearanceStyles(this.#variants, 'Hover')}
      }

      export const appearanceFocus = {
        ${this.generateVariantAppearanceStyles(this.#variants, 'Focus')}
      }

      export const appearanceActive = {
        ${this.generateVariantAppearanceStyles(this.#variants, 'Active')}
      }

      export const appearanceDisabled = {
        ${this.generateVariantAppearanceStyles(this.#variants, 'Disabled')}
      }`)

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

    const allStates: Array<string> = Object.keys(this.colorSchemes).reduce<Array<string>>(
      (array, key) => (key.startsWith(`input.${variant}`) ? [...array, key.split('.')[2]] : array),
      []
    )

    const uniqueStates = [...new Set(allStates)]

    for (const state of uniqueStates) {
      lines.push(`const ${getAppearanceStylesName(variant, state)} = createAppearanceStyles({
        fontColor: vars.colors['input.${variant}.${state}.font'],
        backgroundColor: vars.colors['input.${variant}.${state}.background'],
        borderColor: vars.colors['input.${variant}.${state}.border'],
      })`)
    }

    return lines.join('\n\n')
  }

  private generateVariantAppearanceStyles(
    variants: Array<string>,
    state: string,
    addSuffix: boolean = true
  ): string {
    const suffix = addSuffix ? state : ''
    return variants
      .map((variant) => `${variant}${suffix}: ${getAppearanceStylesName(variant, state)},`)
      .join('\n')
  }
}
