import type { ContainerShape } from './interfaces.js'

import { spacing }             from '@atls-ui/theme/tokens'

import { DEFAULT_WIDTH }       from './constants.js'
export const containerShapes = {
  default: { width: DEFAULT_WIDTH, gap: spacing.component.xs, filesGap: spacing.component.xs2 },
} satisfies Record<string, ContainerShape>
