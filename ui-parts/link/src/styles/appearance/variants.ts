import type { Theme }          from '@atls-ui/theme'

import type { LinkAppearance } from './interfaces.js'

import { iconAppearances }     from '../../icon/styles/appearance/variants.js'
import { textAppearances }     from '../../text/styles/appearance/variants.js'
export const linkAppearances = {
  standalone: (theme: Theme): LinkAppearance => ({
    text: textAppearances.standalone(theme),
    icon: iconAppearances.default(theme),
  }),
  inline: (theme: Theme): LinkAppearance => ({
    text: textAppearances.inline(theme),
    icon: iconAppearances.default(theme),
  }),
}
