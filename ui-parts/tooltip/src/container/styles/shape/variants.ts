import type { ContainerShape } from './interfaces.js'

import { spacing }             from '@atls-ui/theme/tokens'

export const containerShapes: Record<'default', ContainerShape> = {
  default: { offset: Number.parseFloat(spacing.component.md) },
}
