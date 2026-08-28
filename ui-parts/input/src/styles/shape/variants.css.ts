import { createVar }       from '@vanilla-extract/css'
import { styleVariants }   from '@vanilla-extract/css'

import { radii }           from '@atls-ui/theme/tokens'
import { spacing }         from '@atls-ui/theme/tokens'
import { typography }      from '@atls-ui/theme/tokens'

import { inputAddonSizes } from './constants.js'

export const addonSize = createVar()
export const contentGap = createVar()

export const inputShapes = styleVariants({
  sm: {
    ...typography.body.md,
    minWidth: '120px',
    paddingBlock: spacing.component.sm,
    paddingInline: spacing.component.md,
    borderRadius: radii.xs,
    vars: {
      [addonSize]: inputAddonSizes.sm,
      [contentGap]: spacing.component.md,
    },
  },
  md: {
    ...typography.body.lg,
    minWidth: '200px',
    paddingBlock: spacing.component.md,
    paddingInline: spacing.component.lg,
    borderRadius: radii.xs,
    vars: {
      [addonSize]: inputAddonSizes.md,
      [contentGap]: spacing.component.lg,
    },
  },
  lg: {
    ...typography.body.lg,
    minWidth: '240px',
    paddingBlock: spacing.component.lg,
    paddingInline: spacing.component.xl,
    borderRadius: radii.xs,
    vars: {
      [addonSize]: inputAddonSizes.lg,
      [contentGap]: spacing.component.xl,
    },
  },
})
