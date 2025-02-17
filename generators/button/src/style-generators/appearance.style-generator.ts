/* eslint-disable n/no-sync */

import type { ButtonColorSchemes } from '../button-generator.interfaces.js'

import { writeFileSync }           from 'fs'

import { pretty }                  from '@atls-ui-generators/utils'
import { getStylesName }           from '@atls-ui-generators/utils'

const getAppearanceStylesName = (variant: string, state: string): string =>
  getStylesName('appearance', variant, state)

export class ButtonAppearanceStyleGenerator {
  readonly requiredImports = [
    { import: '{ vars }', from: '@ui/theme' },
    { import: '{ createAppearanceStyles }', from: '@atls-ui-parts/button' },
  ]

  #variants: Array<string> = []

  constructor(private readonly colorSchemes: ButtonColorSchemes) {
    const allVariants = Object.keys(colorSchemes).reduce<Array<string>>(
      (array, key) => (key.startsWith('button.') ? [...array, key.split('.')[1]] : array),
      []
    )

    const uniqueVariants = [...new Set(allVariants)]

    this.#variants = uniqueVariants
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
