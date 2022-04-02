import camelcase           from 'camelcase'
import * as prettierPlugin from '@atls/prettier-plugin'
import prettierConfig      from '@atls/config-prettier'
import parserBabel         from 'prettier/parser-babel'
import parserTypescript    from 'prettier/parser-typescript'
import { format }          from 'prettier/standalone'

export class AppearanceStyleGenerator {
  readonly requiredImports = [
    { import: '{ createAppearanceStyles }', from: '@atls-ui-parts/button' },
    { import: '{ ifProp }', from: 'styled-tools' },
    { import: '{ switchProp }', from: 'styled-tools' },
    { import: '{ prop }', from: 'styled-tools' },
  ]

  private getStylesName(variant, state) {
    return camelcase(`appearance ${variant} ${state} styles`)
  }

  private generateVariantStatefulStyles(variant, colorSchemes) {
    const states = Object.keys(colorSchemes[variant])
    const lines: Array<string> = []

    for (const state of states) {
      lines.push(`const ${getStylesName(variant, state)} = createAppearanceStyles({
        fontColor: prop('theme.colors.button.${variant}.${state}.font'),
        backgroundColor: prop('theme.colors.button.${variant}.${state}.background'),
        borderColor: prop('theme.colors.button.${variant}.${state}.border'),
      })`)
    }

    return lines.join('\n\n')
  }

  private generateVariantAppearanceStyles(variant) {
    const statePriorities = ['disabled', 'pressed', 'hover']

    return `${variant}: ${statePriorities
      .map(
        (state) => `ifProp(
  prop('${state}', false),
  ${getStylesName(variant, state)},
  `
      )
      .join('')} ${getStylesName(variant, 'default')}${')'.repeat(statePriorities.length)}`
  }

  generateAppearanceStyles(colorSchemes) {
    const variants = Object.keys(colorSchemes)

    const statefulStyles = variants
      .map((variant) => generateVariantStatefulStyles(variant, colorSchemes))
      .join('\n\n')

    const appearanceStyles = `const appearanceStyles = switchProp(
  prop('variant', 'primary'),
  {${variants.map((variant) => generateVariantAppearanceStyles(variant)).join(',')}}
  )`

    return { statefulStyles, appearanceStyles }
  }
}

const pretty = (string) =>
  format(string, {
    ...prettierConfig,
    parser: 'babel',
    plugins: [parserTypescript, parserBabel, prettierPlugin],
  })

const getStylesName = (variant, state) => camelcase(`appearance ${variant} ${state} styles`)

const generateVariantStatefulStyles = (variant, colorSchemes) => {
  const states = Object.keys(colorSchemes[variant])
  const lines: Array<string> = []

  for (const state of states) {
    lines.push(`const ${getStylesName(variant, state)} = createAppearanceStyles({
        fontColor: prop('theme.colors.button.${variant}.${state}.font'),
        backgroundColor: prop('theme.colors.button.${variant}.${state}.background'),
        borderColor: prop('theme.colors.button.${variant}.${state}.border'),
      })`)
  }

  return lines.join('\n\n')
}

const generateVariantAppearanceStyles = (variant) => {
  const statePriorities = ['disabled', 'pressed', 'hover']

  return `${variant}: ${statePriorities
    .map(
      (state) => `ifProp(
  prop('${state}', false),
  ${getStylesName(variant, state)},
  `
    )
    .join('')} ${getStylesName(variant, 'default')}${')'.repeat(statePriorities.length)}`
}

const generateAppearanceStyles = (colorSchemes) => {
  const requiredImports = [
    { import: '{ createAppearanceStyles }', from: '@atls-ui-parts/button' },
    { import: '{ ifProp }', from: 'styled-tools' },
    { import: '{ switchProp }', from: 'styled-tools' },
    { import: '{ prop }', from: 'styled-tools' },
  ]

  const variants = Object.keys(colorSchemes)

  const statefulStyles = variants
    .map((variant) => generateVariantStatefulStyles(variant, colorSchemes))
    .join('\n\n')

  const appearanceStyles = `const appearanceStyles = switchProp(
  prop('variant', 'primary'),
  {${variants.map((variant) => generateVariantAppearanceStyles(variant)).join(',')}}
  )`

  return { statefulStyles, appearanceStyles, requiredImports }
}

export { generateAppearanceStyles }
