import type { InputValueShape } from './interfaces.js'

import { typography }           from '@atls-ui/theme'
export const inputValueShapes: Record<'lg' | 'md' | 'sm', InputValueShape> = {
  sm: { typography: typography.body.md },
  md: { typography: typography.body.lg },
  lg: { typography: typography.body.lg },
}
