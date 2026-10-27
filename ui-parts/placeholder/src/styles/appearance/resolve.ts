import type { Theme }                                  from '@atls-ui/theme'
import type { CSSProperties }                          from 'react'

import type { PlaceholderAppearance }                  from './interfaces.js'
import type { placeholderAppearances }                 from './variants.js'

import { assignInlineVars }                            from '@vanilla-extract/dynamic'

import { placeholderAppearanceVariables }              from './styles.css.js'
import { placeholderAppearances as appearancePresets } from './variants.js'

export const resolvePlaceholderAppearance = (
  appearance: PlaceholderAppearance | keyof typeof placeholderAppearances,
  theme: Theme
): CSSProperties => {
  const values = typeof appearance === 'string' ? appearancePresets[appearance](theme) : appearance

  return assignInlineVars(placeholderAppearanceVariables, values)
}
