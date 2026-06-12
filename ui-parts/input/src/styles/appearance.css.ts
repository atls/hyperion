import type { InputAppearance }   from './interfaces.js'

import { createAppearanceStyles } from '@atls-ui-parts/theme'
import { vars }                   from '@atls-ui-parts/theme'

const appearanceBlueDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['input.blue.default.font'],
  backgroundColor: vars.colors['input.blue.default.background'],
  borderColor: vars.colors['input.blue.default.border'],
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

const appearanceWhiteDisabledStyles = createAppearanceStyles({
  fontColor: vars.colors['input.white.disabled.font'],
  backgroundColor: vars.colors['input.white.disabled.background'],
  borderColor: vars.colors['input.white.disabled.border'],
})

export const appearanceVariant = {
  blue: appearanceBlueDefaultStyles,
  white: appearanceWhiteDefaultStyles,
}
export const appearanceDisabled = {
  blueDisabled: appearanceBlueDisabledStyles,
  whiteDisabled: appearanceWhiteDisabledStyles,
}
export const inputAppearances: Record<'blue' | 'white', InputAppearance> = {
  blue: {
    default: appearanceVariant.blue,
    disabled: appearanceDisabled.blueDisabled,
  },
  white: {
    default: appearanceVariant.white,
    disabled: appearanceDisabled.whiteDisabled,
  },
}
