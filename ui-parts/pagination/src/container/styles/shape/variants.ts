import type { ContainerShape } from './interfaces.js'

import { spacing }             from '@atls-ui/theme/tokens'

export const containerShapes = { default: { gap: spacing.component.lg } } satisfies Record<
  string,
  ContainerShape
>
