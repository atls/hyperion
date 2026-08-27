import type { CSSProperties }          from 'react'

import type { ButtonAppearanceStates } from './appearance/interfaces.js'
import type { ButtonShapeProperties }  from './shape/interfaces.js'

import { assignInlineVars }            from '@vanilla-extract/dynamic'

import { appearanceVariables }         from './appearance/styles.css.js'
import { applyBackgroundAlpha }        from './elevation.js'
import { shapeVariables }              from './shape/styles.css.js'

export const assignButtonVariables = (
  appearance: ButtonAppearanceStates,
  shape: ButtonShapeProperties,
  style?: CSSProperties
): CSSProperties => ({
  ...assignInlineVars(appearanceVariables, appearance),
  ...assignInlineVars(shapeVariables, {
    ...shape,
    elevations: {
      default: applyBackgroundAlpha(shape.elevations.default, appearance.default.background),
      hover: applyBackgroundAlpha(shape.elevations.hover, appearance.hover.background),
      pressed: applyBackgroundAlpha(shape.elevations.pressed, appearance.pressed.background),
      disabled: applyBackgroundAlpha(shape.elevations.disabled, appearance.disabled.background),
      focused: applyBackgroundAlpha(shape.elevations.focused, appearance.focused.background),
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
