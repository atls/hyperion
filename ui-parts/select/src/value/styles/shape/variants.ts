import type { ValueShape } from './interfaces.js'

import { typography }      from '@atls-ui/theme'
export const valueShapes: Record<'lg' | 'md' | 'sm', ValueShape> = {
  sm: { typography: typography.body.md },
  md: { typography: typography.body.lg },
  lg: { typography: typography.body.lg },
}
