import { readFileSync }             from 'fs'
import { mkdirSync }                from 'fs'
import { existsSync }               from 'fs'

import { pretty }                   from '@atls-ui-generators/utils'

import { AppearanceStyleGenerator } from '../style-generators'

describe('button generator', () => {
  describe('appearance styles generator', () => {
    const theme = {
      colors: {
        button: {
          primary: {
            default: {
              background: 'black',
              font: 'white',
              border: 'black',
            },
            hover: {
              background: 'white',
              font: 'black',
              border: 'white',
            },
            pressed: {
              background: 'white',
              font: 'black',
              border: 'white',
            },
            disabled: {
              background: 'gray',
              font: 'white',
              border: 'gray',
            },
          },
          secondary: {
            default: {
              background: 'white',
              font: 'black',
              border: 'white',
            },
            hover: {
              background: 'black',
              font: 'white',
              border: 'black',
            },
            pressed: {
              background: 'black',
              font: 'white',
              border: 'black',
            },
            disabled: {
              background: 'gray',
              font: 'white',
              border: 'gray',
            },
          },
        },
      },
    }

    const expectedCode = `import { createAppearanceStyles } from '@atls-ui-parts/button'
import { ifProp } from 'styled-tools'
import { switchProp } from 'styled-tools'
import { prop } from 'styled-tools'

const appearancePrimaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.default.font'),
  backgroundColor: prop('theme.colors.button.primary.default.background'),
  borderColor: prop('theme.colors.button.primary.default.border'),
})

const appearancePrimaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.hover.font'),
  backgroundColor: prop('theme.colors.button.primary.hover.background'),
  borderColor: prop('theme.colors.button.primary.hover.border'),
})

const appearancePrimaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.pressed.font'),
  backgroundColor: prop('theme.colors.button.primary.pressed.background'),
  borderColor: prop('theme.colors.button.primary.pressed.border'),
})

const appearancePrimaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.disabled.font'),
  backgroundColor: prop('theme.colors.button.primary.disabled.background'),
  borderColor: prop('theme.colors.button.primary.disabled.border'),
})

const appearanceSecondaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.default.font'),
  backgroundColor: prop('theme.colors.button.secondary.default.background'),
  borderColor: prop('theme.colors.button.secondary.default.border'),
})

const appearanceSecondaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.hover.font'),
  backgroundColor: prop('theme.colors.button.secondary.hover.background'),
  borderColor: prop('theme.colors.button.secondary.hover.border'),
})

const appearanceSecondaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.pressed.font'),
  backgroundColor: prop('theme.colors.button.secondary.pressed.background'),
  borderColor: prop('theme.colors.button.secondary.pressed.border'),
})

const appearanceSecondaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.disabled.font'),
  backgroundColor: prop('theme.colors.button.secondary.disabled.background'),
  borderColor: prop('theme.colors.button.secondary.disabled.border'),
})

const appearanceStyles = switchProp(prop('variant', 'primary'), {
  primary: ifProp(
    prop('disabled', false),
    appearancePrimaryDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearancePrimaryPressedStyles,
      ifProp(prop('hover', false), appearancePrimaryHoverStyles, appearancePrimaryDefaultStyles)
    )
  ),
  secondary: ifProp(
    prop('disabled', false),
    appearanceSecondaryDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceSecondaryPressedStyles,
      ifProp(prop('hover', false), appearanceSecondaryHoverStyles, appearanceSecondaryDefaultStyles)
    )
  ),
})

export { appearanceStyles }
`

    it('should generate code for appearance styles', () => {
      const generator = new AppearanceStyleGenerator(theme.colors.button)
      const generated = generator.generateAppearanceStyles()

      const code = pretty(`
      ${generated.imports}     
      ${generated.statefulStyles}      
      ${generated.appearanceStyles}
      ${generated.exports}
      `)

      expect(code).toBe(expectedCode)
    })

    it('should fail if path ends with slash character', () => {
      const generator = new AppearanceStyleGenerator(theme.colors.button)

      if (!existsSync(`${__dirname}/generated`)) mkdirSync(`${__dirname}/generated`)

      expect(() => generator.generateFile(`${__dirname}/generated/`)).toThrowError()
    })

    it('should generate appearance styles file', () => {
      const generator = new AppearanceStyleGenerator(theme.colors.button)

      if (!existsSync(`${__dirname}/generated`)) mkdirSync(`${__dirname}/generated`)

      generator.generateFile(`${__dirname}/generated`)

      const code = readFileSync(`${__dirname}/generated/button.appearance-styles.ts`)

      expect(Buffer.from(code).toString()).toBe(expectedCode)
    })
  })
})
