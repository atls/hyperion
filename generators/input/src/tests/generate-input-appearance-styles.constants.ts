interface TestCase {
  colors: Record<string, string>
  expectedCode: string
}

export const testCases: Array<TestCase> = [
  {
    colors: {
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
    },
    expectedCode: `import { vars } from '@ui/theme'
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
`,
  },
  {
    colors: {
      'input.input.default.background': 'rgba(255, 255, 255, 1)',
      'input.input.default.font': 'rgba(24, 24, 27, 0.50)',
      'input.input.default.border': 'rgba(24, 24, 27, 0.30)',
      'input.input.filled.background': 'rgba(255, 255, 255, 1)',
      'input.input.filled.font': 'rgba(24, 24, 27, 1)',
      'input.input.filled.border': 'rgba(24, 24, 27, 0.30)',
      'input.input.focus.background': 'rgba(255, 255, 255, 1)',
      'input.input.focus.font': 'rgba(24, 24, 27, 1)',
      'input.input.focus.border': 'rgba(34, 197, 94, 0.40)',
      'input.input.disabled.background': 'rgba(255, 255, 255, 0.50)',
      'input.input.disabled.font': 'rgba(24, 24, 27, 0.30)',
      'input.input.disabled.border': 'rgba(24, 24, 27, 0.10)',
      'input.input.error.background': 'rgba(255, 255, 255, 1)',
      'input.input.error.font': 'rgba(24, 24, 27, 1)',
      'input.input.error.border': 'rgba(225, 29, 72, 0.65)',
    },
    expectedCode: `import { vars } from '@ui/theme'
import { createAppearanceStyles } from '@atls-ui-parts/input'

const appearanceInputDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['input.input.default.font'],
  backgroundColor: vars.colors['input.input.default.background'],
  borderColor: vars.colors['input.input.default.border'],
})

const appearanceInputFilledStyles = createAppearanceStyles({
  fontColor: vars.colors['input.input.filled.font'],
  backgroundColor: vars.colors['input.input.filled.background'],
  borderColor: vars.colors['input.input.filled.border'],
})

const appearanceInputFocusStyles = createAppearanceStyles({
  fontColor: vars.colors['input.input.focus.font'],
  backgroundColor: vars.colors['input.input.focus.background'],
  borderColor: vars.colors['input.input.focus.border'],
})

const appearanceInputDisabledStyles = createAppearanceStyles({
  fontColor: vars.colors['input.input.disabled.font'],
  backgroundColor: vars.colors['input.input.disabled.background'],
  borderColor: vars.colors['input.input.disabled.border'],
})

const appearanceInputErrorStyles = createAppearanceStyles({
  fontColor: vars.colors['input.input.error.font'],
  backgroundColor: vars.colors['input.input.error.background'],
  borderColor: vars.colors['input.input.error.border'],
})

export const appearanceVariant = {
  input: appearanceInputDefaultStyles,
}

export const appearanceFilled = {
  inputFilled: appearanceInputFilledStyles,
}

export const appearanceFocus = {
  inputFocus: appearanceInputFocusStyles,
}

export const appearanceDisabled = {
  inputDisabled: appearanceInputDisabledStyles,
}

export const appearanceError = {
  inputError: appearanceInputErrorStyles,
}
`,
  },
]
