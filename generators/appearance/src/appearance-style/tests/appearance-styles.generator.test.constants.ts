import type { TestCase } from './appearance-styles.generator.test.interfaces.js'

import * as path         from 'node:path'

export const dirname = path.dirname(new URL(import.meta.url).pathname)

export const testCases: Array<TestCase> = [
  {
    prefix: 'input',
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
    expectedCode: `import { vars } from '@ui/theme/theme-css'
import { createAppearanceStyles } from '@atls-ui-generators/appearance'

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
    prefix: 'input',
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
    expectedCode: `import { vars } from '@ui/theme/theme-css'
import { createAppearanceStyles } from '@atls-ui-generators/appearance'

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
  {
    prefix: 'badge',
    colors: {
      'badge.primary.default.background': 'rgba(24, 24, 27, 0.5)',
      'badge.primary.default.font': 'rgba(255, 255, 255, 1)',
      'badge.primary.default.border': 'transparent',
      'badge.info.default.background': 'rgba(14, 165, 233, 1)',
      'badge.info.default.font': 'rgba(255, 255, 255, 1)',
      'badge.info.default.border': 'transparent',
      'badge.success.default.background': 'rgba(34, 197, 94, 1)',
      'badge.success.default.font': 'rgba(255, 255, 255, 1)',
      'badge.success.default.border': 'transparent',
      'badge.warning.default.background': 'rgba(249, 115, 22, 1)',
      'badge.warning.default.font': 'rgba(255, 255, 255, 1)',
      'badge.warning.default.border': 'transparent',
      'badge.danger.default.background': 'rgba(225, 29, 72, 1)',
      'badge.danger.default.font': 'rgba(255, 255, 255, 1)',
      'badge.danger.default.border': 'transparent',
      'badge.disabled.default.background': 'rgba(24, 24, 27, 0.05)',
      'badge.disabled.default.font': 'rgba(24, 24, 27, 0.3)',
      'badge.disabled.default.border': 'transparent',
      'badge.draft.default.background': 'rgba(24, 24, 27, 0.3)',
      'badge.draft.default.font': 'rgba(255, 255, 255, 1)',
      'badge.draft.default.border': 'transparent',
      'badge.primary.outline.background': 'transparent',
      'badge.primary.outline.font': 'rgba(24, 24, 27, 0.5)',
      'badge.primary.outline.border': 'rgba(24, 24, 27, 0.5)',
      'badge.info.outline.background': 'transparent',
      'badge.info.outline.font': 'rgba(14, 165, 233, 1)',
      'badge.info.outline.border': 'rgba(14, 165, 233, 1)',
      'badge.success.outline.background': 'transparent',
      'badge.success.outline.font': 'rgba(34, 197, 94, 1)',
      'badge.success.outline.border': 'rgba(34, 197, 94, 1)',
      'badge.warning.outline.background': 'transparent',
      'badge.warning.outline.font': 'rgba(249, 115, 22, 1)',
      'badge.warning.outline.border': 'rgba(249, 115, 22, 1)',
      'badge.danger.outline.background': 'transparent',
      'badge.danger.outline.font': 'rgba(225, 29, 72, 1)',
      'badge.danger.outline.border': 'rgba(225, 29, 72, 1)',
      'badge.disabled.outline.background': 'transparent',
      'badge.disabled.outline.font': 'rgba(24, 24, 27, 0.1)',
      'badge.disabled.outline.border': 'rgba(24, 24, 27, 0.1)',
      'badge.draft.outline.background': 'transparent',
      'badge.draft.outline.font': 'rgba(24, 24, 27, 0.5)',
      'badge.draft.outline.border': 'rgba(24, 24, 27, 0.5)',
    },
    expectedCode: `import { vars } from '@ui/theme/theme-css'
import { createAppearanceStyles } from '@atls-ui-generators/appearance'

const appearancePrimaryDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['badge.primary.default.font'],
  backgroundColor: vars.colors['badge.primary.default.background'],
  borderColor: vars.colors['badge.primary.default.border'],
})

const appearancePrimaryOutlineStyles = createAppearanceStyles({
  fontColor: vars.colors['badge.primary.outline.font'],
  backgroundColor: vars.colors['badge.primary.outline.background'],
  borderColor: vars.colors['badge.primary.outline.border'],
})

const appearanceInfoDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['badge.info.default.font'],
  backgroundColor: vars.colors['badge.info.default.background'],
  borderColor: vars.colors['badge.info.default.border'],
})

const appearanceInfoOutlineStyles = createAppearanceStyles({
  fontColor: vars.colors['badge.info.outline.font'],
  backgroundColor: vars.colors['badge.info.outline.background'],
  borderColor: vars.colors['badge.info.outline.border'],
})

const appearanceSuccessDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['badge.success.default.font'],
  backgroundColor: vars.colors['badge.success.default.background'],
  borderColor: vars.colors['badge.success.default.border'],
})

const appearanceSuccessOutlineStyles = createAppearanceStyles({
  fontColor: vars.colors['badge.success.outline.font'],
  backgroundColor: vars.colors['badge.success.outline.background'],
  borderColor: vars.colors['badge.success.outline.border'],
})

const appearanceWarningDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['badge.warning.default.font'],
  backgroundColor: vars.colors['badge.warning.default.background'],
  borderColor: vars.colors['badge.warning.default.border'],
})

const appearanceWarningOutlineStyles = createAppearanceStyles({
  fontColor: vars.colors['badge.warning.outline.font'],
  backgroundColor: vars.colors['badge.warning.outline.background'],
  borderColor: vars.colors['badge.warning.outline.border'],
})

const appearanceDangerDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['badge.danger.default.font'],
  backgroundColor: vars.colors['badge.danger.default.background'],
  borderColor: vars.colors['badge.danger.default.border'],
})

const appearanceDangerOutlineStyles = createAppearanceStyles({
  fontColor: vars.colors['badge.danger.outline.font'],
  backgroundColor: vars.colors['badge.danger.outline.background'],
  borderColor: vars.colors['badge.danger.outline.border'],
})

const appearanceDisabledDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['badge.disabled.default.font'],
  backgroundColor: vars.colors['badge.disabled.default.background'],
  borderColor: vars.colors['badge.disabled.default.border'],
})

const appearanceDisabledOutlineStyles = createAppearanceStyles({
  fontColor: vars.colors['badge.disabled.outline.font'],
  backgroundColor: vars.colors['badge.disabled.outline.background'],
  borderColor: vars.colors['badge.disabled.outline.border'],
})

const appearanceDraftDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['badge.draft.default.font'],
  backgroundColor: vars.colors['badge.draft.default.background'],
  borderColor: vars.colors['badge.draft.default.border'],
})

const appearanceDraftOutlineStyles = createAppearanceStyles({
  fontColor: vars.colors['badge.draft.outline.font'],
  backgroundColor: vars.colors['badge.draft.outline.background'],
  borderColor: vars.colors['badge.draft.outline.border'],
})

export const appearanceVariant = {
  primary: appearancePrimaryDefaultStyles,
  info: appearanceInfoDefaultStyles,
  success: appearanceSuccessDefaultStyles,
  warning: appearanceWarningDefaultStyles,
  danger: appearanceDangerDefaultStyles,
  disabled: appearanceDisabledDefaultStyles,
  draft: appearanceDraftDefaultStyles,
}

export const appearanceOutline = {
  primaryOutline: appearancePrimaryOutlineStyles,
  infoOutline: appearanceInfoOutlineStyles,
  successOutline: appearanceSuccessOutlineStyles,
  warningOutline: appearanceWarningOutlineStyles,
  dangerOutline: appearanceDangerOutlineStyles,
  disabledOutline: appearanceDisabledOutlineStyles,
  draftOutline: appearanceDraftOutlineStyles,
}
`,
  },
  {
    prefix: 'button',
    colors: {
      'input.blue.default.font': 'rgba(255, 255, 255, 1)',
      'input.blue.default.background': 'rgba(65, 109, 223, 1)',
      'input.blue.default.border': 'rgba(0,0,0,0)',
    },
    expectedError: `Not found color keys for prefix 'button'`,
  },
  {
    prefix: 'input',
    colors: {
      'input.default.font': 'rgba(255, 255, 255, 1)',
      'input.default.background': 'rgba(65, 109, 223, 1)',
      'input.default.border': 'rgba(0,0,0,0)',
    },
    expectedError: `Color key should match the pattern 'prefix.variant.state.type', where 'type' can be 'font', 'background', or 'border'.`,
  },
  {
    prefix: 'input',
    colors: {
      'input.blue.font': 'rgba(255, 255, 255, 1)',
      'input.blue.background': 'rgba(65, 109, 223, 1)',
      'input.blue.border': 'rgba(0,0,0,0)',
    },
    expectedError: `Color key should match the pattern 'prefix.variant.state.type', where 'type' can be 'font', 'background', or 'border'.`,
  },
  {
    prefix: 'input',
    colors: {
      'input.blue.default.shadow': 'rgba(255, 255, 255, 1)',
      'input.blue.default.backgroundColor': 'rgba(65, 109, 223, 1)',
      'input.blue.default.borderColor': 'rgba(0,0,0,0)',
    },
    expectedError: `Color key should match the pattern 'prefix.variant.state.type', where 'type' can be 'font', 'background', or 'border'.`,
  },
]
