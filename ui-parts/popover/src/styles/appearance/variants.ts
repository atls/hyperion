import type { Theme }             from '@atls-ui/theme'

import type { PopoverAppearance } from './interfaces.js'

import { arrowAppearances }       from '../../arrow/styles/appearance/variants.js'
import { boxAppearances }         from '../../box/styles/appearance/variants.js'

export const popoverAppearances = {
  default: (theme: Theme): PopoverAppearance => ({
    box: boxAppearances.default(theme),
    arrow: arrowAppearances.default(theme),
  }),
}
