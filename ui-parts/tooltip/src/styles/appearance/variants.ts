import type { Theme }             from '@atls-ui/theme'

import type { TooltipAppearance } from './interfaces.js'

import { arrowAppearances }       from '../../arrow/styles/appearance/variants.js'
import { boxAppearances }         from '../../box/styles/appearance/variants.js'
import { textAppearances }        from '../../text/styles/appearance/variants.js'

export const tooltipAppearances = {
  default: (theme: Theme): TooltipAppearance => ({
    box: boxAppearances.default(theme),
    text: textAppearances.default(theme),
    arrow: arrowAppearances.default(theme),
  }),
}
