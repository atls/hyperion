import type { ButtonAppearance } from '@atls-ui-parts/button'

import { vars }                  from '@atls-ui-admin/theme'

export const buttonAppearances: Record<'blue' | 'ghost' | 'lightBlue', ButtonAppearance> = {
  blue: {
    default: {
      background: vars.colors['button.blue.default.background'],
      content: vars.colors['button.blue.default.font'],
      border: vars.colors['button.blue.default.border'],
    },
    hover: {
      background: vars.colors['button.blue.hover.background'],
      content: vars.colors['button.blue.hover.font'],
      border: vars.colors['button.blue.hover.border'],
    },
    pressed: {
      background: vars.colors['button.blue.pressed.background'],
      content: vars.colors['button.blue.pressed.font'],
      border: vars.colors['button.blue.pressed.border'],
    },
    disabled: {
      background: vars.colors['button.blue.disabled.background'],
      content: vars.colors['button.blue.disabled.font'],
      border: vars.colors['button.blue.disabled.border'],
    },
    focused: {
      background: vars.colors['button.blue.default.background'],
      content: vars.colors['button.blue.default.font'],
      border: vars.colors['button.blue.default.border'],
    },
  },
  lightBlue: {
    default: {
      background: vars.colors['button.lightBlue.default.background'],
      content: vars.colors['button.lightBlue.default.font'],
      border: vars.colors['button.lightBlue.default.border'],
    },
    hover: {
      background: vars.colors['button.lightBlue.hover.background'],
      content: vars.colors['button.lightBlue.hover.font'],
      border: vars.colors['button.lightBlue.hover.border'],
    },
    pressed: {
      background: vars.colors['button.lightBlue.pressed.background'],
      content: vars.colors['button.lightBlue.pressed.font'],
      border: vars.colors['button.lightBlue.pressed.border'],
    },
    disabled: {
      background: vars.colors['button.lightBlue.disabled.background'],
      content: vars.colors['button.lightBlue.disabled.font'],
      border: vars.colors['button.lightBlue.disabled.border'],
    },
    focused: {
      background: vars.colors['button.lightBlue.default.background'],
      content: vars.colors['button.lightBlue.default.font'],
      border: vars.colors['button.lightBlue.default.border'],
    },
  },
  ghost: {
    default: {
      background: 'transparent',
      content: 'inherit',
      border: 'transparent',
    },
    hover: {
      background: 'transparent',
      content: 'inherit',
      border: 'transparent',
    },
    pressed: {
      background: 'transparent',
      content: 'inherit',
      border: 'transparent',
    },
    disabled: {
      background: 'transparent',
      content: 'inherit',
      border: 'transparent',
    },
    focused: {
      background: 'transparent',
      content: 'inherit',
      border: 'transparent',
    },
  },
}
