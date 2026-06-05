import { style } from '@vanilla-extract/css'

const boxSmallShapeStyles = style({
  width: 16,
  height: 16,
  borderRadius: 4,
})

const boxMediumShapeStyles = style({
  width: 24,
  height: 24,
  borderRadius: 4,
})

const boxLargeShapeStyles = style({
  width: 32,
  height: 32,
  borderRadius: 4,
})

export const boxShapeStyles = {
  small: boxSmallShapeStyles,
  medium: boxMediumShapeStyles,
  large: boxLargeShapeStyles,
}
