import type { Theme }           from '@atls-ui/theme'

import type { ModalAppearance } from './interfaces.js'

import { boxAppearances }       from '../../box/styles/appearance/variants.js'
import { closeAppearances }     from '../../close/styles/appearance/variants.js'

export const modalAppearances = {
  default: (theme: Theme): ModalAppearance => ({
    box: boxAppearances.default(theme),
    close: closeAppearances.default(theme),
    backdropColor: theme.colors.surface.backdrop,
  }),
}
