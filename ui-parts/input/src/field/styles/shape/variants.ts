import type { InputFieldShape } from './interfaces.js'

import { iconSizes }            from '@atls-ui/theme'
import { borderWidths }         from '@atls-ui/theme'
import { radii }                from '@atls-ui/theme'
import { spacing }              from '@atls-ui/theme'

import { INPUT_FIELD_WIDTHS }   from './constants.js'
import { UNFILLED_SM_WIDTH }    from './constants.js'
export const inputFieldShapes: Record<'lg' | 'md' | 'sm', InputFieldShape> = {
  sm: {
    addonSlotSize: iconSizes.sm,
    width: INPUT_FIELD_WIDTHS.sm,
    unfilledWidth: UNFILLED_SM_WIDTH,
    paddingInline: spacing.component.md,
    paddingBlock: spacing.component.sm,
    gap: spacing.component.md,
    borderRadius: radii.xs2,
    borderWidth: borderWidths.sm,
    elevationSize: 'xs',
  },
  md: {
    addonSlotSize: iconSizes.md,
    width: INPUT_FIELD_WIDTHS.md,
    paddingInline: spacing.component.lg,
    paddingBlock: spacing.component.md,
    gap: spacing.component.lg,
    borderRadius: radii.xs2,
    borderWidth: borderWidths.sm,
    elevationSize: 'sm',
  },
  lg: {
    addonSlotSize: iconSizes.lg,
    width: INPUT_FIELD_WIDTHS.lg,
    paddingInline: spacing.component.xl,
    paddingBlock: spacing.component.lg,
    gap: spacing.component.xl,
    borderRadius: radii.xs2,
    borderWidth: borderWidths.sm,
    elevationSize: 'md',
  },
}
