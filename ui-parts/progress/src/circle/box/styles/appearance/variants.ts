import type { Theme }         from '@atls-ui/theme'

import type { BoxAppearance } from './interfaces.js'

import { shadowOffsets }      from '@atls-ui/theme/tokens'
import { shadowBlurs }        from '@atls-ui/theme/tokens'
import { shadowSpreads }      from '@atls-ui/theme/tokens'

const boxShadow = (theme: Theme): BoxAppearance['shadow'] =>
  [
    `${shadowOffsets.none} ${shadowOffsets.none} ${shadowBlurs.xs5} ${shadowSpreads.none} ${theme.colors.action.subtle}`,
    `${shadowOffsets.none} ${shadowOffsets.none} ${shadowBlurs.xs5} ${shadowSpreads.none} ${theme.colors.elevation.sm}`,
  ].join(', ')

export const boxAppearances = {
  primary: (theme: Theme): BoxAppearance => ({
    backgroundColor: theme.colors.surface.base,
    shadow: boxShadow(theme),
  }),
  secondary: (theme: Theme): BoxAppearance => ({
    backgroundColor: theme.colors.text.secondary,
    shadow: boxShadow(theme),
  }),
}
