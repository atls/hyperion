import { writeFileSync }      from 'fs'

import { pretty }             from '@atls-ui-generators/utils'
import { getStylesName }      from '@atls-ui-generators/utils'

import { ButtonColorSchemes } from '../button-generator.interfaces.js'

const getAppearanceStylesName = (variant: string, state: string) =>
  getStylesName('appearance', variant, state)

export class ButtonAppearanceStyleGenerator {
  readonly requiredImports = [
    { import: '{ vars }', from: '@ui/theme' },
    { import: '{ createAppearanceStyles }', from: '@atls-ui-parts/button' },
  ]

  #variants: string[] = []

  constructor(private readonly colorSchemes: ButtonColorSchemes) {
    const allVariants = Object.keys(colorSchemes).reduce<string[]>(
      (array, key) => (key.startsWith('button.') ? [...array, key.split('.')[1]] : array),
      []
    )

    const uniqueVariants = [...new Set(allVariants)]

    this.#variants = uniqueVariants
  }

  private generateVariantStatefulStyles(variant: string) {
    const lines: string[] = []

    const allStates: string[] = Object.keys(this.colorSchemes).reduce<string[]>(
      (array, key) => (key.startsWith(`button.${variant}`) ? [...array, key.split('.')[2]] : array),
      []
    )

    const uniqueStates = [...new Set(allStates)]

    for (const state of uniqueStates) {
      lines.push(`const ${getAppearanceStylesName(variant, state)} = createAppearanceStyles({
        fontColor: vars.colors['button.${variant}.${state}.font'],
        backgroundColor: vars.colors['button.${variant}.${state}.background'],
        borderColor: vars.colors['button.${variant}.${state}.border'],
      })`)
    }

    return lines.join('\n\n')
  }

  private generateVariantAppearanceStyles(
    variants: string[],
    state: string,
    addSuffix: boolean = true
  ) {
    const suffix = addSuffix ? state : ''
    return variants
      .map((variant) => `${variant}${suffix}: ${getAppearanceStylesName(variant, state)},`)
      .join('\n')
  }

  generateAppearanceStyles() {
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

      export const appearancePressed = {
        ${this.generateVariantAppearanceStyles(this.#variants, 'Pressed')}
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

  generateFile(path, filename = 'appearance.css.ts') {
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
}
