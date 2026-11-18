import type { Theme }           from '@atls-ui/theme'

import type { ImageAppearance } from './interfaces.js'

import { fallbackAppearances }  from '../../fallback/styles/appearance/variants.js'
import { loadingAppearances }   from '../../loading/styles/appearance/variants.js'
export const imageAppearances = {
  default: (theme: Theme): ImageAppearance => ({
    fallback: fallbackAppearances.default(theme),
    loading: loadingAppearances.default(theme),
  }),
}
