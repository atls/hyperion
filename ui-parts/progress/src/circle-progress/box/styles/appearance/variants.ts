import type { Theme }         from '@atls-ui/theme'

import type { BoxAppearance } from './interfaces.js'

import { shadowOffsets }      from '@atls-ui/theme/tokens'

import { SUBTLE_SHADOW }      from './constants.js'
import { ELEVATION_SHADOW }   from './constants.js'

const boxShadow = (theme: Theme): BoxAppearance['shadow'] =>
  [
    `${shadowOffsets.none} ${shadowOffsets.none} ${SUBTLE_SHADOW.blur} ${SUBTLE_SHADOW.spread} ${theme.colors.action.subtle}`,
    `${shadowOffsets.none} ${shadowOffsets.none} ${ELEVATION_SHADOW.blur} ${ELEVATION_SHADOW.spread} ${theme.colors.elevation.sm}`,
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
