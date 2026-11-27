import type { ContainerShape } from './interfaces.js'

import { spacing }             from '@atls-ui/theme'
export const containerShapes: Record<'default', ContainerShape> = {
  default: { offset: Number.parseFloat(spacing.component.xs) },
}
