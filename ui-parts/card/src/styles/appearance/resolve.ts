import type { Theme }              from '@atls-ui/theme'
import type { CSSProperties }      from 'react'

import type { CardShape }          from '../shape/interfaces.js'
import type { CardAppearance }     from './interfaces.js'

import { assignInlineVars }        from '@vanilla-extract/dynamic'

import { cardAppearanceVariables } from './styles.css.js'
import { cardAppearances }         from './variants.js'

export const getCardAppearance = (
  appearance: CardAppearance | keyof typeof cardAppearances,
  theme: Theme,
  elevationSize: CardShape['elevationSize']
): CSSProperties => {
  const states =
    typeof appearance === 'string' ? cardAppearances[appearance](theme, elevationSize) : appearance

  return assignInlineVars(cardAppearanceVariables, states)
}
