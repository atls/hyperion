import type { CSSProperties }         from 'react'

import type { InputAppearanceStates } from './appearance/interfaces.js'

import { assignInlineVars }           from '@vanilla-extract/dynamic'

import { appearanceVariables }        from './appearance/styles.css.js'

export const assignInputVariables = (
  appearance: InputAppearanceStates,
  style?: CSSProperties
): CSSProperties => ({
  ...assignInlineVars(appearanceVariables, appearance),
  ...style,
})
