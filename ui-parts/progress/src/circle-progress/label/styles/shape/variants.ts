import type { LabelShape } from './interfaces.js'

import { typography }      from '@atls-ui/theme/tokens'

export const labelShapes = {
  xs2: { typography: { ...typography.overline, fontSize: 5, lineHeight: '7px' } },
  xs: { typography: { ...typography.overline, fontSize: 6, lineHeight: '8px' } },
  sm: { typography: { ...typography.overline, fontSize: 8, lineHeight: '10px' } },
  md: { typography: typography.overline },
  lg: { typography: typography.caption },
  xl: { typography: typography.caption },
} satisfies Record<string, LabelShape>
