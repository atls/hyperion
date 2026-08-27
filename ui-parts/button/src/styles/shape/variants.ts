import type { Theme }                 from '@atls-ui/theme'

import type { ButtonShape }           from './interfaces.js'
import type { ButtonShapeName }       from './interfaces.js'
import type { ButtonShapeProperties } from './interfaces.js'
import type { ButtonShapes }          from './interfaces.js'

import { borderStyles }               from '@atls-ui/theme/tokens'
import { borderWidths }               from '@atls-ui/theme/tokens'
import { radii }                      from '@atls-ui/theme/tokens'
import { spacing }                    from '@atls-ui/theme/tokens'

import { buttonAddonSizes }           from './constants.js'

const variants = (theme: Theme): Record<ButtonShapeName, ButtonShapeProperties> => ({
  xs: {
    borderRadius: radii.xs2,
    paddingInline: spacing.component.sm,
    paddingBlock: spacing.component.xs,
    typography: theme.typography.label.sm,
    borderStyle: borderStyles.solid,
    borderWidth: borderWidths.sm,
    gap: spacing.component.xs,
    addonSize: buttonAddonSizes.xs,
    elevations: {
      ...theme.elevations.xs,
      focused: theme.elevations.xs.disabled,
    },
  },
  sm: {
    borderRadius: radii.xs2,
    paddingInline: spacing.component.md,
    paddingBlock: spacing.component.xs,
    typography: theme.typography.body.md,
    borderStyle: borderStyles.solid,
    borderWidth: borderWidths.sm,
    gap: spacing.component.md,
    addonSize: buttonAddonSizes.sm,
    elevations: {
      ...theme.elevations.sm,
      focused: theme.elevations.sm.disabled,
    },
  },
  md: {
    borderRadius: radii.xs2,
    paddingInline: spacing.component.lg,
    paddingBlock: spacing.component.sm,
    typography: theme.typography.label.md,
    borderStyle: borderStyles.solid,
    borderWidth: borderWidths.sm,
    gap: spacing.component.lg,
    addonSize: buttonAddonSizes.md,
    elevations: {
      ...theme.elevations.md,
      focused: theme.elevations.md.disabled,
    },
  },
  lg: {
    borderRadius: radii.xs2,
    paddingInline: spacing.component.xl,
    paddingBlock: spacing.component.sm,
    typography: theme.typography.label.lg,
    borderStyle: borderStyles.solid,
    borderWidth: borderWidths.sm,
    gap: spacing.component.xl,
    addonSize: buttonAddonSizes.lg,
    elevations: {
      ...theme.elevations.lg,
      focused: theme.elevations.lg.disabled,
    },
  },
})

export const buttonShapes = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const satisfies ButtonShapes

export const isButtonShapeName = (shape: string): shape is ButtonShapeName => shape in buttonShapes

export const resolveButtonShape = (
  shape: ButtonShape,
  theme: Theme
): ButtonShapeProperties | undefined => {
  if (typeof shape !== 'string') {
    return shape
  }

  return isButtonShapeName(shape) ? variants(theme)[shape] : undefined
}
