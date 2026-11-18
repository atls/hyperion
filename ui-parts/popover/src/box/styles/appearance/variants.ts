import type { Theme }         from '@atls-ui/theme'

import type { BoxAppearance } from './interfaces.js'

import { shadowBlurs }        from '@atls-ui/theme/tokens'
import { shadowOffsets }      from '@atls-ui/theme/tokens'

export const boxAppearances: Record<'default', (theme: Theme) => BoxAppearance> = {
  default: (theme) => ({
    backgroundColor: theme.colors.surface.soft,
    shadow: `drop-shadow(${shadowOffsets.none} ${shadowOffsets.xs} calc(${shadowBlurs.xs4} / 2) ${theme.colors.elevation.xs})`,
  }),
}
