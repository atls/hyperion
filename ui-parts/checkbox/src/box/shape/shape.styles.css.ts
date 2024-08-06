import { styleVariants } from '@vanilla-extract/css'

export const boxShapeStyles = styleVariants({
  small: { width: 16, height: 16, borderRadius: 4 },
  medium: { width: 24, height: 24, borderRadius: 4 },
  large: { width: 32, height: 32, borderRadius: 4 },
})
