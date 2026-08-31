import { createVar }     from '@vanilla-extract/css'
import { styleVariants } from '@vanilla-extract/css'

import { radii }         from '@atls-ui/theme/tokens'
import { spacing }       from '@atls-ui/theme/tokens'
import { typography }    from '@atls-ui/theme/tokens'

import { buttonAddonSizes } from './constants.js'

export const addonSize = createVar()
export const contentGap = createVar()

export const elevationVariables = {
  default: createVar(),
  hover: createVar(),
  pressed: createVar(),
  disabled: createVar(),
  focused: createVar(),
} as const

const elevationStyles = {
  boxShadow: elevationVariables.default,
  selectors: {
    '&:hover:not(:disabled)': {
      boxShadow: elevationVariables.hover,
    },
    '&:focus-visible:not(:disabled)': {
      boxShadow: elevationVariables.focused,
    },
    '&:active:not(:disabled)': {
      boxShadow: elevationVariables.pressed,
    },
    '&:disabled': {
      boxShadow: elevationVariables.disabled,
    },
  },
} as const

export const buttonShapes = styleVariants({
  xs: {
    ...elevationStyles,
    ...typography.label.sm,
    paddingBlock: spacing.component.xs,
    paddingInline: spacing.component.sm,
    borderRadius: radii.xs2,
    vars: {
      [addonSize]: buttonAddonSizes.xs,
      [contentGap]: spacing.component.xs,
    },
  },
  sm: {
    ...elevationStyles,
    ...typography.body.md,
    paddingBlock: spacing.component.xs,
    paddingInline: spacing.component.md,
    borderRadius: radii.xs2,
    vars: {
      [addonSize]: buttonAddonSizes.sm,
      [contentGap]: spacing.component.md,
    },
  },
  md: {
    ...elevationStyles,
    ...typography.label.md,
    paddingBlock: spacing.component.sm,
    paddingInline: spacing.component.lg,
    borderRadius: radii.xs2,
    vars: {
      [addonSize]: buttonAddonSizes.md,
      [contentGap]: spacing.component.lg,
    },
  },
  lg: {
    ...elevationStyles,
    ...typography.label.lg,
    paddingBlock: spacing.component.sm,
    paddingInline: spacing.component.xl,
    borderRadius: radii.xs2,
    vars: {
      [addonSize]: buttonAddonSizes.lg,
      [contentGap]: spacing.component.xl,
    },
  },
})
