import { vars }                   from '@atls-ui-parts/theme'

import { createAppearanceStyles } from '../utils/index.js'

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
