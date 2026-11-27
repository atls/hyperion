import type { FileItemContainerShape } from './interfaces.js'

import { spacing }                     from '@atls-ui/theme/tokens'
export const fileItemContainerShapes = {
  default: {
    paddingInline: spacing.component.xs,
    paddingBlock: spacing.component.xs2,
    gap: spacing.component.xs,
    rowGap: spacing.component.md,
    width: '100%',
  },
} satisfies Record<string, FileItemContainerShape>
