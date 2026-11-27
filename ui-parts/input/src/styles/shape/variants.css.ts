import type { InputShape }  from './interfaces.js'

import { createVar }        from '@vanilla-extract/css'
import { styleVariants }    from '@vanilla-extract/css'

import { radii }            from '@atls-ui/theme/tokens'
import { spacing }          from '@atls-ui/theme/tokens'

import { inputValueShapes } from '../../value/styles/shape/variants.js'
import { inputAddonSizes }  from './constants.js'
import { inputMinWidths }   from './constants.js'

export const addonSize = createVar()
export const contentGap = createVar()

const inputShapeStyles = styleVariants({
  sm: {
    ...inputValueShapes.sm.typography,
    minWidth: inputMinWidths.sm,
    paddingBlock: spacing.component.sm,
    paddingInline: spacing.component.md,
    borderRadius: radii.xs,
    vars: {
      [addonSize]: inputAddonSizes.sm,
      [contentGap]: spacing.component.md,
    },
  },
  md: {
    ...inputValueShapes.md.typography,
    minWidth: inputMinWidths.md,
    paddingBlock: spacing.component.md,
    paddingInline: spacing.component.lg,
    borderRadius: radii.xs,
    vars: {
      [addonSize]: inputAddonSizes.md,
      [contentGap]: spacing.component.lg,
    },
  },
  lg: {
    ...inputValueShapes.lg.typography,
    minWidth: inputMinWidths.lg,
    paddingBlock: spacing.component.lg,
    paddingInline: spacing.component.xl,
    borderRadius: radii.xs,
    vars: {
      [addonSize]: inputAddonSizes.lg,
      [contentGap]: spacing.component.xl,
    },
  },
})

export const inputShapes = {
  sm: {
    className: inputShapeStyles.sm,
    elevation: 'sm',
  },
  md: {
    className: inputShapeStyles.md,
    elevation: 'md',
  },
  lg: {
    className: inputShapeStyles.lg,
    elevation: 'lg',
  },
} as const satisfies Record<'lg' | 'md' | 'sm', InputShape>
