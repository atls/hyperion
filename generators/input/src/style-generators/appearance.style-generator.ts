import { writeFileSync }     from 'fs'

import { pretty }            from '@atls-ui-generators/utils'
import { getStylesName }     from '@atls-ui-generators/utils'

import { InputColorSchemes } from '../input-generator.interfaces'

const getAppearanceStylesName = (variant, state) => getStylesName('appearance', variant, state)

export class AppearanceStyleGenerator {
  public readonly requiredImports = [
    { import: '{ createAppearanceStyles }', from: '@atls-ui-parts/input' },
    { import: '{ ifProp }', from: 'styled-tools' },
    { import: '{ switchProp }', from: 'styled-tools' },
    { import: '{ prop }', from: 'styled-tools' },
  ]

  constructor(private readonly colorSchemes: InputColorSchemes) {}

  private generateVariantStatefulStyles(variant) {
    const states = Object.keys(this.colorSchemes[variant])
    const lines: Array<string> = []

    for (const state of states) {
      lines.push(`const ${getAppearanceStylesName(variant, state)} = createAppearanceStyles({
        fontColor: prop('theme.colors.input.${variant}.${state}.font'),
        backgroundColor: prop('theme.colors.input.${variant}.${state}.background'),
        borderColor: prop('theme.colors.input.${variant}.${state}.border'),
      })`)
    }

    return lines.join('\n\n')
  }

  private generateVariantAppearanceStyles(variant) {
    const statePriorities = ['disabled', 'error', 'pressed', 'focus', 'hover']

    return `${variant}: ${statePriorities
      .map(
        (state) => `ifProp(
  prop('${state}', false),
  ${getAppearanceStylesName(variant, state)},
  `
      )
      .join('')} ${getAppearanceStylesName(variant, 'default')}${')'.repeat(
      statePriorities.length
    )}`
  }

  generateAppearanceStyles() {
    const variants = Object.keys(this.colorSchemes)

    const statefulStyles = pretty(
      variants.map((variant) => this.generateVariantStatefulStyles(variant)).join('\n\n')
    )
    const appearanceStyles = pretty(`const appearanceStyles = switchProp(
  prop('variant', 'primary'),
  {${variants.map((variant) => this.generateVariantAppearanceStyles(variant)).join(',')}}
  )`)

    const imports = pretty(
      this.requiredImports
        .map((requiredImport) => `import ${requiredImport.import} from '${requiredImport.from}'`)
        .join('\n')
    )

    const exports = 'export { appearanceStyles }'

    return { statefulStyles, appearanceStyles, imports, exports }
  }

  generateFile(path, filename = 'input.appearance-styles.ts') {
    const generated = this.generateAppearanceStyles()

    const code = pretty(`
    ${generated.imports}
    ${generated.statefulStyles}
    ${generated.appearanceStyles}
    ${generated.exports}
    `)

    if (path.split('').pop() === '/') {
      throw new Error("Path should not end with '/' character")
    }

    writeFileSync(`${path}/${filename}`, code)
  }
}
