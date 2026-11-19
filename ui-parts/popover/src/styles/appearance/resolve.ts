import type { Theme }               from '@atls-ui/theme'
import type { CSSProperties }       from 'react'

import type { PopoverAppearance }   from './interfaces.js'

import { assignInlineVars }         from '@vanilla-extract/dynamic'

import { arrowAppearanceVariables } from '../../arrow/styles/appearance/styles.css.js'
import { boxAppearanceVariables }   from '../../box/styles/appearance/styles.css.js'
import { popoverAppearances }       from './variants.js'

export const resolvePopoverAppearance = (
  appearance: PopoverAppearance | keyof typeof popoverAppearances,
  theme: Theme
): CSSProperties => {
  const values = typeof appearance === 'string' ? popoverAppearances[appearance](theme) : appearance
  return {
    ...assignInlineVars(boxAppearanceVariables, values.box),
    ...assignInlineVars(arrowAppearanceVariables, values.arrow),
  }
}
