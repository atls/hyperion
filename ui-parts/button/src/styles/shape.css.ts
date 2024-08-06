import { vars }              from '@atls-ui-parts/theme'

import { createShapeStyles } from '../utils/index.js'

const hugeStyles = createShapeStyles({
  size: 56,
  rounding: vars.radii.f24,
})

const largeStyles = createShapeStyles({
  size: 48,
  rounding: vars.radii.f24,
})

const semiMediumStyles = createShapeStyles({
  size: 43,
  rounding: vars.radii.f24,
})

const mediumStyles = createShapeStyles({
  size: 40,
  rounding: vars.radii.f24,
})

const normalStyles = createShapeStyles({
  size: 36,
  rounding: vars.radii.f24,
  paddingLeft: vars.space.g24,
  paddingRight: vars.space.g24,
})

const smallStyles = createShapeStyles({
  size: 32,
  rounding: vars.radii.f24,
})

const smallSizeMediumRadiiStyles = createShapeStyles({
  size: 32,
  rounding: vars.radii.f16,
})

const autoSizeStyles = createShapeStyles({
  size: 'auto',
})

const autoSizeRoundStyles = createShapeStyles({
  size: 'auto',
  rounding: vars.radii.f100,
  paddingLeft: vars.space.g10,
  paddingRight: vars.space.g10,
})

export const shapeStyles = {
  huge: hugeStyles,
  large: largeStyles,
  medium: mediumStyles,
  small: smallStyles,
  smallSizeMediumRadii: smallSizeMediumRadiiStyles,
  autoSize: autoSizeStyles,
  normal: normalStyles,
  semiMedium: semiMediumStyles,
  autoSizeRound: autoSizeRoundStyles,
}
