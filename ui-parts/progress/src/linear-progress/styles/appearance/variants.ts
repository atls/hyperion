import type { Theme }                     from '@atls-ui/theme'

import type { LinearProgressAppearance }  from './interfaces.js'

import { shadowOffsets }                  from '@atls-ui/theme/tokens'

import { LINEAR_SHADOW_ACTION_BLUR }      from './constants.js'
import { LINEAR_SHADOW_ACTION_SPREAD }    from './constants.js'
import { LINEAR_SHADOW_ELEVATION_BLUR }   from './constants.js'
import { LINEAR_SHADOW_ELEVATION_SPREAD } from './constants.js'
import { linearIndicatorAppearances }     from '../../indicator/styles/appearance/variants.js'
import { linearTrackAppearances }         from '../../track/styles/appearance/variants.js'

const boxShadow = (theme: Theme): string =>
  [
    `${shadowOffsets.none} ${shadowOffsets.none} ${LINEAR_SHADOW_ACTION_BLUR} ${LINEAR_SHADOW_ACTION_SPREAD} ${theme.colors.action.subtle}`,
    `${shadowOffsets.none} ${shadowOffsets.none} ${LINEAR_SHADOW_ELEVATION_BLUR} ${LINEAR_SHADOW_ELEVATION_SPREAD} ${theme.colors.elevation.sm}`,
  ].join(', ')

export const linearProgressAppearances = {
  primary: (theme: Theme): LinearProgressAppearance => ({
    track: { ...linearTrackAppearances.primary(theme), boxShadow: boxShadow(theme) },
    indicator: { ...linearIndicatorAppearances.primary(theme), boxShadow: boxShadow(theme) },
  }),
  secondary: (theme: Theme): LinearProgressAppearance => ({
    track: { ...linearTrackAppearances.secondary(theme), boxShadow: boxShadow(theme) },
    indicator: { ...linearIndicatorAppearances.secondary(theme), boxShadow: boxShadow(theme) },
  }),
}
