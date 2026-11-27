import type { Theme }                from '@atls-ui/theme'

import type { PaginationAppearance } from './interfaces.js'

import { indicatorAppearances }      from '../../indicator/appearance/variants.js'
import { itemAppearances }           from '../../item/styles/appearance/variants.js'

export const paginationAppearances = {
  default: (theme: Theme): PaginationAppearance => ({
    item: itemAppearances.default(theme),
    indicator: indicatorAppearances.default(theme),
  }),
}
