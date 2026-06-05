import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-parts/theme'

const boxSmallShapeStyles = style({
  width: vars.space.g16,
  height: vars.space.g16,
  borderRadius: vars.radii.f4,
})

const boxMediumShapeStyles = style({
  width: vars.space.g24,
  height: vars.space.g24,
  borderRadius: vars.radii.f4,
})

const boxLargeShapeStyles = style({
  width: vars.space.g32,
  height: vars.space.g32,
  borderRadius: vars.radii.f4,
})

export const boxShapeStyles = {
  small: boxSmallShapeStyles,
  medium: boxMediumShapeStyles,
  large: boxLargeShapeStyles,
}
