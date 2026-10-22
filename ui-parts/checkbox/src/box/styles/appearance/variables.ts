import type { CSSProperties }            from 'react'

import type { CheckboxAppearanceStates } from '../../../checkbox.interfaces.js'

import { assignInlineVars }              from '@vanilla-extract/dynamic'

import { boxAppearanceVariables }        from './styles.css.js'

export const assignCheckboxVariables = (appearance: CheckboxAppearanceStates): CSSProperties =>
  assignInlineVars(boxAppearanceVariables, appearance)
