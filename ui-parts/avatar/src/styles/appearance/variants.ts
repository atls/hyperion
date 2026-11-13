import type { Theme }            from '@atls-ui/theme'

import type { BoxShape }         from '../../box/styles/shape/interfaces.js'
import type { AvatarAppearance } from './interfaces.js'

import { boxAppearances }        from '../../box/styles/appearance/variants.js'
import { fallbackAppearances }   from '../../fallback/styles/appearance/variants.js'
import { loadingAppearances }    from '../../loading/styles/appearance/variants.js'
export const avatarAppearances = {
  default: (theme: Theme, size: BoxShape['elevationSize']): AvatarAppearance => ({
    box: boxAppearances.default(theme, size),
    fallback: fallbackAppearances.default(theme),
    loading: loadingAppearances.default(theme),
  }),
}
