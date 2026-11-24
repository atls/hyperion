import type { TriggerShape } from './interfaces.js'

import { borderWidths }      from '@atls-ui/theme'
import { radii }             from '@atls-ui/theme'
import { spacing }           from '@atls-ui/theme'

import { TRIGGER_WIDTHS }    from './constants.js'
export const triggerShapes: Record<'lg' | 'md' | 'sm', TriggerShape> = {
  sm: {
    width: TRIGGER_WIDTHS.sm,
    paddingInline: spacing.component.md,
    paddingBlock: spacing.component.sm,
    gap: spacing.component.md,
    borderRadius: radii.xs2,
    borderWidth: borderWidths.sm,
    elevationSize: 'xs',
  },
  md: {
    width: TRIGGER_WIDTHS.md,
    paddingInline: spacing.component.lg,
    paddingBlock: spacing.component.md,
    gap: spacing.component.lg,
    borderRadius: radii.xs2,
    borderWidth: borderWidths.sm,
    elevationSize: 'sm',
  },
  lg: {
    width: TRIGGER_WIDTHS.lg,
    paddingInline: spacing.component.xl,
    paddingBlock: spacing.component.lg,
    gap: spacing.component.xl,
    borderRadius: radii.xs2,
    borderWidth: borderWidths.sm,
    elevationSize: 'md',
  },
}
