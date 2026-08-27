import type { CSSProperties }          from 'react'

import type { ButtonAppearanceStates } from './appearance/interfaces.js'
import type { ButtonShapeProperties }  from './shape/interfaces.js'

import { assignInlineVars }            from '@vanilla-extract/dynamic'

import { appearanceVariables }         from './appearance/styles.css.js'
import { shapeVariables }              from './shape/styles.css.js'

export const assignButtonVariables = (
  appearance: ButtonAppearanceStates,
  shape: ButtonShapeProperties,
  style?: CSSProperties
): CSSProperties => ({
  ...assignInlineVars(appearanceVariables, appearance),
  ...assignInlineVars(shapeVariables, {
    ...shape,
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
