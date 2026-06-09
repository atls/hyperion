import type { ButtonAppearance }  from './interfaces.js'

import { createAppearanceStyles } from '@atls-ui-generators/appearance'
import { vars }                   from '@atls-ui-parts/theme'

const appearanceBlueDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['button.blue.default.font'],
  backgroundColor: vars.colors['button.blue.default.background'],
  borderColor: vars.colors['button.blue.default.border'],
})

const appearanceBlueHoverStyles = createAppearanceStyles({
  fontColor: vars.colors['button.blue.hover.font'],
  backgroundColor: vars.colors['button.blue.hover.background'],
  borderColor: vars.colors['button.blue.hover.border'],
})

const appearanceBluePressedStyles = createAppearanceStyles({
  fontColor: vars.colors['button.blue.pressed.font'],
  backgroundColor: vars.colors['button.blue.pressed.background'],
  borderColor: vars.colors['button.blue.pressed.border'],
})

const appearanceBlueDisabledStyles = createAppearanceStyles({
  fontColor: vars.colors['button.blue.disabled.font'],
  backgroundColor: vars.colors['button.blue.disabled.background'],
  borderColor: vars.colors['button.blue.disabled.border'],
})

const appearanceLightBlueDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['button.lightBlue.default.font'],
  backgroundColor: vars.colors['button.lightBlue.default.background'],
  borderColor: vars.colors['button.lightBlue.default.border'],
})

const appearanceLightBlueHoverStyles = createAppearanceStyles({
  fontColor: vars.colors['button.lightBlue.hover.font'],
  backgroundColor: vars.colors['button.lightBlue.hover.background'],
  borderColor: vars.colors['button.lightBlue.hover.border'],
})

const appearanceLightBluePressedStyles = createAppearanceStyles({
  fontColor: vars.colors['button.lightBlue.pressed.font'],
  backgroundColor: vars.colors['button.lightBlue.pressed.background'],
  borderColor: vars.colors['button.lightBlue.pressed.border'],
})

const appearanceLightBlueDisabledStyles = createAppearanceStyles({
  fontColor: vars.colors['button.lightBlue.disabled.font'],
  backgroundColor: vars.colors['button.lightBlue.disabled.background'],
  borderColor: vars.colors['button.lightBlue.disabled.border'],
})

const appearanceGhostDefaultStyles = createAppearanceStyles({
  fontColor: 'inherit',
  backgroundColor: 'transparent',
  border: 'none',
})

const appearanceGhostHoverStyles = createAppearanceStyles({
  fontColor: 'inherit',
  backgroundColor: 'transparent',
  border: 'none',
})

const appearanceGhostPressedStyles = createAppearanceStyles({
  fontColor: 'inherit',
  backgroundColor: 'transparent',
  border: 'none',
})

const appearanceGhostDisabledStyles = createAppearanceStyles({
  fontColor: 'inherit',
  backgroundColor: 'transparent',
  border: 'none',
})

export const appearanceVariant = {
  blue: appearanceBlueDefaultStyles,
  lightBlue: appearanceLightBlueDefaultStyles,
  ghost: appearanceGhostDefaultStyles,
}

export const appearanceHover = {
  blueHover: appearanceBlueHoverStyles,
  lightBlueHover: appearanceLightBlueHoverStyles,
  ghostHover: appearanceGhostHoverStyles,
}

export const appearancePressed = {
  bluePressed: appearanceBluePressedStyles,
  lightBluePressed: appearanceLightBluePressedStyles,
  ghostPressed: appearanceGhostPressedStyles,
}

export const appearanceDisabled = {
  blueDisabled: appearanceBlueDisabledStyles,
  lightBlueDisabled: appearanceLightBlueDisabledStyles,
  ghostDisabled: appearanceGhostDisabledStyles,
}

export const buttonAppearances: Record<'blue' | 'lightBlue' | 'ghost', ButtonAppearance> = {
  blue: {
    default: appearanceVariant.blue,
    hover: appearanceHover.blueHover,
    pressed: appearancePressed.bluePressed,
    disabled: appearanceDisabled.blueDisabled,
  },
  lightBlue: {
    default: appearanceVariant.lightBlue,
    hover: appearanceHover.lightBlueHover,
    pressed: appearancePressed.lightBluePressed,
    disabled: appearanceDisabled.lightBlueDisabled,
  },
  ghost: {
    default: appearanceVariant.ghost,
    hover: appearanceHover.ghostHover,
    pressed: appearancePressed.ghostPressed,
    disabled: appearanceDisabled.ghostDisabled,
  },
}
