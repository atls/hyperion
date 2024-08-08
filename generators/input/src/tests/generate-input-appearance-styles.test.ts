import { readFileSync }                  from 'fs'
import { mkdirSync }                     from 'fs'
import { existsSync }                    from 'fs'

import { pretty }                        from '@atls-ui-generators/utils'

import { InputAppearanceStyleGenerator } from '../style-generators/index.js'

describe('input generator', () => {
  describe('appearance styles generator', () => {
    const colors: Record<string, string> = {
      'input.blue.default.font': 'rgba(255, 255, 255, 1)',
      'input.blue.default.background': 'rgba(65, 109, 223, 1)',
      'input.blue.default.border': 'rgba(0,0,0,0)',
      'input.blue.hover.font': 'rgba(255, 255, 255, 1)',
      'input.blue.hover.background': 'rgba(0, 66, 236, 1)',
      'input.blue.hover.border': 'rgba(0,0,0,0)',
      'input.blue.focus.font': 'rgba(255, 255, 255, 1)',
      'input.blue.focus.background': 'rgba(0, 66, 236, 1)',
      'input.blue.focus.border': 'rgba(0,0,0,0)',
      'input.blue.active.font': 'rgba(255, 255, 255, 1)',
      'input.blue.active.background': 'rgba(0, 66, 236, 1)',
      'input.blue.active.border': 'rgba(0,0,0,0)',
      'input.blue.disabled.font': 'rgba(138, 138, 138, 1)',
      'input.blue.disabled.background': 'rgba(212, 212, 212, 1)',
      'input.blue.disabled.border': 'rgba(0,0,0,0)',

      'input.white.default.font': 'rgb(0,0,0)',
      'input.white.default.background': 'rgba(212, 212, 212, 1)',
      'input.white.default.border': 'transparent',
      'input.white.hover.font': 'rgb(0,0,0)',
      'input.white.hover.background': 'rgba(212, 212, 212, 1)',
      'input.white.hover.border': 'transparent',
      'input.white.focus.font': 'rgb(0,0,0)',
      'input.white.focus.background': 'rgba(212, 212, 212, 1)',
      'input.white.focus.border': 'rgb(0,0,0)',
      'input.white.active.font': 'rgb(0,0,0)',
      'input.white.active.background': 'rgba(212, 212, 212, 1)',
      'input.white.active.border': 'transparent',
      'input.white.disabled.font': 'rgb(0,0,0)',
      'input.white.disabled.background': 'rgba(71, 84, 103, 1)',
      'input.white.disabled.border': 'transparent',
    }

    const expectedCode = `import { vars } from '@ui/theme'
import { createAppearanceStyles } from '@atls-ui-parts/input'

const appearanceBlueDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['input.blue.default.font'],
  backgroundColor: vars.colors['input.blue.default.background'],
  borderColor: vars.colors['input.blue.default.border'],
})

const appearanceBlueHoverStyles = createAppearanceStyles({
  fontColor: vars.colors['input.blue.hover.font'],
  backgroundColor: vars.colors['input.blue.hover.background'],
  borderColor: vars.colors['input.blue.hover.border'],
})

const appearanceBlueFocusStyles = createAppearanceStyles({
  fontColor: vars.colors['input.blue.focus.font'],
  backgroundColor: vars.colors['input.blue.focus.background'],
  borderColor: vars.colors['input.blue.focus.border'],
})

const appearanceBlueActiveStyles = createAppearanceStyles({
  fontColor: vars.colors['input.blue.active.font'],
  backgroundColor: vars.colors['input.blue.active.background'],
  borderColor: vars.colors['input.blue.active.border'],
})

const appearanceBlueDisabledStyles = createAppearanceStyles({
  fontColor: vars.colors['input.blue.disabled.font'],
  backgroundColor: vars.colors['input.blue.disabled.background'],
  borderColor: vars.colors['input.blue.disabled.border'],
})

const appearanceWhiteDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['input.white.default.font'],
  backgroundColor: vars.colors['input.white.default.background'],
  borderColor: vars.colors['input.white.default.border'],
})

const appearanceWhiteHoverStyles = createAppearanceStyles({
  fontColor: vars.colors['input.white.hover.font'],
  backgroundColor: vars.colors['input.white.hover.background'],
  borderColor: vars.colors['input.white.hover.border'],
})

const appearanceWhiteFocusStyles = createAppearanceStyles({
  fontColor: vars.colors['input.white.focus.font'],
  backgroundColor: vars.colors['input.white.focus.background'],
  borderColor: vars.colors['input.white.focus.border'],
})

const appearanceWhiteActiveStyles = createAppearanceStyles({
  fontColor: vars.colors['input.white.active.font'],
  backgroundColor: vars.colors['input.white.active.background'],
  borderColor: vars.colors['input.white.active.border'],
})

const appearanceWhiteDisabledStyles = createAppearanceStyles({
  fontColor: vars.colors['input.white.disabled.font'],
  backgroundColor: vars.colors['input.white.disabled.background'],
  borderColor: vars.colors['input.white.disabled.border'],
})

export const appearanceVariant = {
  blue: appearanceBlueDefaultStyles,
  white: appearanceWhiteDefaultStyles,
}

export const appearanceHover = {
  blueHover: appearanceBlueHoverStyles,
  whiteHover: appearanceWhiteHoverStyles,
}

export const appearanceFocus = {
  blueFocus: appearanceBlueFocusStyles,
  whiteFocus: appearanceWhiteFocusStyles,
}

export const appearanceActive = {
  blueActive: appearanceBlueActiveStyles,
  whiteActive: appearanceWhiteActiveStyles,
}

export const appearanceDisabled = {
  blueDisabled: appearanceBlueDisabledStyles,
  whiteDisabled: appearanceWhiteDisabledStyles,
}
`

    it('should generate code for appearance styles', () => {
      const generator = new InputAppearanceStyleGenerator(colors)
      const generated = generator.generateAppearanceStyles()

      const code = pretty(`
      ${generated.imports}     
      ${generated.statefulStyles}      
      ${generated.appearanceStyles}
      `)

      expect(code).toBe(expectedCode)
    })

    it('should fail if path ends with slash character', () => {
      const generator = new InputAppearanceStyleGenerator(colors)

      if (!existsSync(`${__dirname}/generated`)) mkdirSync(`${__dirname}/generated`)

      expect(() => generator.generateFile(`${__dirname}/generated/`)).toThrowError()
    })

    it('should generate appearance styles file', () => {
      const generator = new InputAppearanceStyleGenerator(colors)

      if (!existsSync(`${__dirname}/generated`)) mkdirSync(`${__dirname}/generated`)

      generator.generateFile(`${__dirname}/generated`)

      const code = readFileSync(`${__dirname}/generated/appearance.css.ts`)

      expect(Buffer.from(code).toString()).toBe(expectedCode)
    })
  })
})
