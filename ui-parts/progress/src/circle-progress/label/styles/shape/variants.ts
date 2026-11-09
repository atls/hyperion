import type { LabelShape }    from './interfaces.js'

import { LABEL_FONT_SIZES }   from './constants.js'
import { LABEL_LINE_HEIGHTS } from './constants.js'

export const labelShapes = {
  xs2: {
    typography: (theme) => ({
      ...theme.typography.overline,
      fontSize: LABEL_FONT_SIZES.xs2,
      lineHeight: LABEL_LINE_HEIGHTS.xs2,
    }),
  },
  xs: {
    typography: (theme) => ({
      ...theme.typography.overline,
      fontSize: LABEL_FONT_SIZES.xs,
      lineHeight: LABEL_LINE_HEIGHTS.xs,
    }),
  },
  sm: {
    typography: (theme) => ({
      ...theme.typography.overline,
      fontSize: LABEL_FONT_SIZES.sm,
      lineHeight: LABEL_LINE_HEIGHTS.sm,
    }),
  },
  md: { typography: (theme) => theme.typography.overline },
  lg: { typography: (theme) => theme.typography.caption },
  xl: { typography: (theme) => theme.typography.caption },
} satisfies Record<string, LabelShape>
