import type { Theme }                    from '@atls-ui/theme'

import type { LinearProgressAppearance } from './interfaces.js'

import { progressShadow }                from '../../../shadow.js'
import { linearIndicatorAppearances }    from '../../indicator/styles/appearance/variants.js'
import { linearTrackAppearances }        from '../../track/styles/appearance/variants.js'

export const linearProgressAppearances = {
  primary: (theme: Theme): LinearProgressAppearance => ({
    track: { ...linearTrackAppearances.primary(theme), boxShadow: progressShadow(theme) },
    indicator: { ...linearIndicatorAppearances.primary(theme), boxShadow: progressShadow(theme) },
  }),
  secondary: (theme: Theme): LinearProgressAppearance => ({
    track: { ...linearTrackAppearances.secondary(theme), boxShadow: progressShadow(theme) },
    indicator: { ...linearIndicatorAppearances.secondary(theme), boxShadow: progressShadow(theme) },
  }),
}
