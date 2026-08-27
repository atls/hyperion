import type { CSSProperties }          from 'react'

import type { ButtonAppearanceStates } from './appearance/interfaces.js'
import type { ButtonColors }           from './appearance/interfaces.js'
import type { ButtonShapeProperties }  from './shape/interfaces.js'

import { assignInlineVars }            from '@vanilla-extract/dynamic'

import { appearanceVariables }         from './appearance/styles.css.js'
import { shapeVariables }              from './shape/styles.css.js'

const resolveElevation = (elevation: string, colors: ButtonColors): string =>
  colors.background === 'transparent' && colors.border === 'transparent' ? 'none' : elevation

export const assignButtonVariables = (
  appearance: ButtonAppearanceStates,
  shape: ButtonShapeProperties,
  style?: CSSProperties
): CSSProperties => ({
  ...assignInlineVars(appearanceVariables, appearance),
  ...assignInlineVars(shapeVariables, {
    ...shape,
    elevations: {
      default: resolveElevation(shape.elevations.default, appearance.default),
      hover: resolveElevation(shape.elevations.hover, appearance.hover),
      pressed: resolveElevation(shape.elevations.pressed, appearance.pressed),
      disabled: resolveElevation(shape.elevations.disabled, appearance.disabled),
      focused: resolveElevation(shape.elevations.focused, appearance.focused),
    },
    typography: {
      fontFamily: String(shape.typography.fontFamily ?? 'inherit'),
      fontSize: String(shape.typography.fontSize ?? 'inherit'),
      fontWeight: String(shape.typography.fontWeight ?? 'inherit'),
      letterSpacing: String(shape.typography.letterSpacing ?? 'inherit'),
      lineHeight: String(shape.typography.lineHeight ?? 'inherit'),
    },
  }),
  ...style,
})
