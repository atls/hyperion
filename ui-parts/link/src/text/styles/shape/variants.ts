import type { TextShape } from './interfaces.js'

import { typography }     from '@atls-ui/theme/tokens'
export const textShapes = { default: { typography: typography.body.lg } } satisfies Record<
  string,
  TextShape
>
