import type { CSSProperties } from 'react'

import { style }              from '@vanilla-extract/css'

import { vars }               from '@atls-ui-admin/theme'

interface ButtonShapeStyles {
  size: number | string
  rounding?: CSSProperties['borderRadius']
  paddingLeft?: CSSProperties['paddingLeft']
  paddingRight?: CSSProperties['paddingRight']
}

const getDefaultPadding = (size: number | string): number =>
  typeof size === 'number' ? size * 0.5 : 0

const createShapeStyles = ({
  size,
  rounding = 0,
  paddingLeft,
  paddingRight,
}: ButtonShapeStyles): string =>
  style({
    height: size,
    paddingLeft: paddingLeft ?? getDefaultPadding(size),
    paddingRight: paddingRight ?? getDefaultPadding(size),
    borderRadius: rounding,
  })

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

const ghostStyles = createShapeStyles({
  size: 'auto',
  paddingLeft: 0,
  paddingRight: 0,
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
  ghost: ghostStyles,
}

export const buttonShapes = shapeStyles
