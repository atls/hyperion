import type { LabelShape } from './interfaces.js'

import { fontSizes }       from '@atls-ui/theme/tokens'
import { lineHeights }     from '@atls-ui/theme/tokens'

export const labelShapes: Record<'lg' | 'md' | 'sm' | 'xl' | 'xs' | 'xs2', LabelShape> = {
  xs2: {
    typography: (theme) => ({
      ...theme.typography.overline,
      fontSize: fontSizes.xs6,
      lineHeight: lineHeights.xs6,
    }),
  },
  xs: {
    typography: (theme) => ({
      ...theme.typography.overline,
      fontSize: fontSizes.xs5,
      lineHeight: lineHeights.xs5,
    }),
  },
  sm: {
    typography: (theme) => ({
      ...theme.typography.overline,
      fontSize: fontSizes.xs4,
      lineHeight: lineHeights.xs4,
    }),
  },
  md: { typography: (theme) => theme.typography.overline },
  lg: { typography: (theme) => theme.typography.caption },
  xl: { typography: (theme) => theme.typography.caption },
}
