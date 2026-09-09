import { createVar }                from '@vanilla-extract/css'
import { styleVariants }            from '@vanilla-extract/css'

import { borderWidths }             from '@atls-ui/theme/tokens'
import { radii }                    from '@atls-ui/theme/tokens'
import { spacing }                  from '@atls-ui/theme/tokens'

import { resolveSwitchThumbOffset } from './constants.js'
import { switchShapeSizes }         from './constants.js'

export const elevationVariable = createVar()
export const thumbOffsetVariable = createVar()
export const thumbSizeVariable = createVar()

const createShape = ({
  thumbSize,
  width,
}: (typeof switchShapeSizes)[keyof typeof switchShapeSizes]) => ({
  width,
  paddingBlock: spacing.component.xs2,
  paddingInline: spacing.component.xs2,
  borderRadius: radii.xs3,
  borderWidth: borderWidths.xs,
  boxShadow: elevationVariable,
  vars: {
    [thumbOffsetVariable]: resolveSwitchThumbOffset(width),
    [thumbSizeVariable]: thumbSize,
  },
})

export const switchShapes = styleVariants({
  sm: createShape(switchShapeSizes.sm),
  md: createShape(switchShapeSizes.md),
  lg: createShape(switchShapeSizes.lg),
})
