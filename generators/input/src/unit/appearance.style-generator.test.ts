import { readFileSync }             from 'fs'
import { mkdirSync }                from 'fs'
import { existsSync }               from 'fs'

import { pretty }                   from '@atls-ui-generators/utils'

import { AppearanceStyleGenerator } from '../style-generators'

describe('input generator', () => {
  describe('appearance styles generator', () => {
    const theme = {
      colors: {
        input: {
          primary: {
            default: {
              background: 'white',
              border: 'black',
              font: 'black',
            },
            hover: {
              background: 'gray',
              border: 'white',
              font: 'black',
            },
            pressed: {
              background: 'gray',
              border: 'white',
              font: 'black',
            },
            focus: {
              background: 'white',
              border: 'black',
              font: 'black',
            },
            disabled: {
              background: 'gray',
              border: 'white',
              font: 'gray',
            },
            error: {
              background: 'white',
              border: 'red',
              font: 'red',
            },
          },
          secondary: {
            default: {
              background: 'white',
              border: 'black',
              font: 'black',
            },
            hover: {
              background: 'gray',
              border: 'white',
              font: 'black',
            },
            pressed: {
              background: 'gray',
              border: 'white',
              font: 'black',
            },
            focus: {
              background: 'white',
              border: 'black',
              font: 'black',
            },
            disabled: {
              background: 'gray',
              border: 'white',
              font: 'gray',
            },
            error: {
              background: 'white',
              border: 'red',
              font: 'red',
            },
          },
        },
      },
    }

    const expectedCode = `import { createAppearanceStyles } from '@atls-ui-parts/input'
import { ifProp } from 'styled-tools'
import { switchProp } from 'styled-tools'
import { prop } from 'styled-tools'

const appearancePrimaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.primary.default.font'),
  backgroundColor: prop('theme.colors.input.primary.default.background'),
  borderColor: prop('theme.colors.input.primary.default.border'),
})

const appearancePrimaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.primary.hover.font'),
  backgroundColor: prop('theme.colors.input.primary.hover.background'),
  borderColor: prop('theme.colors.input.primary.hover.border'),
})

const appearancePrimaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.primary.pressed.font'),
  backgroundColor: prop('theme.colors.input.primary.pressed.background'),
  borderColor: prop('theme.colors.input.primary.pressed.border'),
})

const appearancePrimaryFocusStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.primary.focus.font'),
  backgroundColor: prop('theme.colors.input.primary.focus.background'),
  borderColor: prop('theme.colors.input.primary.focus.border'),
})

const appearancePrimaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.primary.disabled.font'),
  backgroundColor: prop('theme.colors.input.primary.disabled.background'),
  borderColor: prop('theme.colors.input.primary.disabled.border'),
})

const appearancePrimaryErrorStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.primary.error.font'),
  backgroundColor: prop('theme.colors.input.primary.error.background'),
  borderColor: prop('theme.colors.input.primary.error.border'),
})

const appearanceSecondaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.secondary.default.font'),
  backgroundColor: prop('theme.colors.input.secondary.default.background'),
  borderColor: prop('theme.colors.input.secondary.default.border'),
})

const appearanceSecondaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.secondary.hover.font'),
  backgroundColor: prop('theme.colors.input.secondary.hover.background'),
  borderColor: prop('theme.colors.input.secondary.hover.border'),
})

const appearanceSecondaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.secondary.pressed.font'),
  backgroundColor: prop('theme.colors.input.secondary.pressed.background'),
  borderColor: prop('theme.colors.input.secondary.pressed.border'),
})

const appearanceSecondaryFocusStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.secondary.focus.font'),
  backgroundColor: prop('theme.colors.input.secondary.focus.background'),
  borderColor: prop('theme.colors.input.secondary.focus.border'),
})

const appearanceSecondaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.secondary.disabled.font'),
  backgroundColor: prop('theme.colors.input.secondary.disabled.background'),
  borderColor: prop('theme.colors.input.secondary.disabled.border'),
})

const appearanceSecondaryErrorStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.secondary.error.font'),
  backgroundColor: prop('theme.colors.input.secondary.error.background'),
  borderColor: prop('theme.colors.input.secondary.error.border'),
})

const appearanceStyles = switchProp(prop('variant', 'primary'), {
  primary: ifProp(
    prop('disabled', false),
    appearancePrimaryDisabledStyles,
    ifProp(
      prop('error', false),
      appearancePrimaryErrorStyles,
      ifProp(
        prop('pressed', false),
        appearancePrimaryPressedStyles,
        ifProp(
          prop('focus', false),
          appearancePrimaryFocusStyles,
          ifProp(prop('hover', false), appearancePrimaryHoverStyles, appearancePrimaryDefaultStyles)
        )
      )
    )
  ),
  secondary: ifProp(
    prop('disabled', false),
    appearanceSecondaryDisabledStyles,
    ifProp(
      prop('error', false),
      appearanceSecondaryErrorStyles,
      ifProp(
        prop('pressed', false),
        appearanceSecondaryPressedStyles,
        ifProp(
          prop('focus', false),
          appearanceSecondaryFocusStyles,
          ifProp(
            prop('hover', false),
            appearanceSecondaryHoverStyles,
            appearanceSecondaryDefaultStyles
          )
        )
      )
    )
  ),
})

export { appearanceStyles }
`

    it('should generate code for appearance styles', () => {
      const generator = new AppearanceStyleGenerator(theme.colors.input)
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
      const generator = new AppearanceStyleGenerator(theme.colors.input)

      if (!existsSync(`${__dirname}/generated`)) mkdirSync(`${__dirname}/generated`)

      expect(() => generator.generateFile(`${__dirname}/generated/`)).toThrowError()
    })

    it('should generate appearance styles file', () => {
      const generator = new AppearanceStyleGenerator(theme.colors.input)

      if (!existsSync(`${__dirname}/generated`)) mkdirSync(`${__dirname}/generated`)

      generator.generateFile(`${__dirname}/generated`)

      const code = readFileSync(`${__dirname}/generated/input.appearance-styles.ts`)

      expect(Buffer.from(code).toString()).toBe(expectedCode)
    })
  })
})
