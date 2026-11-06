import type { Theme }               from '@atls-ui/theme'
import type { CSSProperties }       from 'react'

import type { TooltipAppearance }   from './interfaces.js'

import { assignInlineVars }         from '@vanilla-extract/dynamic'

import { arrowAppearanceVariables } from '../../arrow/styles/appearance/styles.css.js'
import { boxAppearanceVariables }   from '../../box/styles/appearance/styles.css.js'
import { textAppearanceVariables }  from '../../text/styles/appearance/styles.css.js'
import { tooltipAppearances }       from './variants.js'

export const resolveTooltipAppearance = (
  appearance: TooltipAppearance | keyof typeof tooltipAppearances,
  theme: Theme
): CSSProperties => {
  const values = typeof appearance === 'string' ? tooltipAppearances[appearance](theme) : appearance
  return {
    ...assignInlineVars(boxAppearanceVariables, values.box),
    ...assignInlineVars(textAppearanceVariables, values.text),
    ...assignInlineVars(arrowAppearanceVariables, values.arrow),
  }
}
