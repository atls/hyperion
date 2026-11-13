import type { ContainerShape }  from './interfaces.js'

import { borderWidths }         from '@atls-ui/theme/tokens'
import { spacing }              from '@atls-ui/theme/tokens'

import { XS_CONTAINER_PADDING } from './constants.js'
import { CONTAINER_SIZES }      from './constants.js'

export const containerShapes = {
  xs2: { ...CONTAINER_SIZES.xs2, padding: borderWidths.sm },
  xs: { ...CONTAINER_SIZES.xs, padding: XS_CONTAINER_PADDING },
  sm: { ...CONTAINER_SIZES.sm, padding: spacing.component.xs2 },
  md: { ...CONTAINER_SIZES.md, padding: spacing.component.xs2 },
  lg: { ...CONTAINER_SIZES.lg, padding: spacing.component.xs2 },
  xl: { ...CONTAINER_SIZES.xl, padding: spacing.component.xs2 },
} satisfies Record<string, ContainerShape>
