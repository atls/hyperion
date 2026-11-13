import type { Theme }                    from '@atls-ui/theme'

import type { CircleProgressAppearance } from './interfaces.js'

import { boxAppearances }                from '../../box/styles/appearance/variants.js'
import { indicatorAppearances }          from '../../indicator/styles/appearance/variants.js'
import { labelAppearances }              from '../../label/styles/appearance/variants.js'
import { trackAppearances }              from '../../track/styles/appearance/variants.js'

export const circleProgressAppearances = {
  primary: (theme: Theme): CircleProgressAppearance => ({
    box: boxAppearances.primary(theme),
    track: trackAppearances.default(theme),
    indicator: indicatorAppearances.primary(theme),
    label: labelAppearances.primary(theme),
  }),
  secondary: (theme: Theme): CircleProgressAppearance => ({
    box: boxAppearances.secondary(theme),
    track: trackAppearances.default(theme),
    indicator: indicatorAppearances.secondary(theme),
    label: labelAppearances.secondary(theme),
  }),
}
