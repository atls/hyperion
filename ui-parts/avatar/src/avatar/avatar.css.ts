import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars }   from '@atls-ui-parts/theme'

const baseAvatarStyles = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  boxSizing: 'border-box',
  userSelect: 'none',
  backgroundColor: vars.colors.black,
})

const circleAvatarStyles = style({
  borderRadius: vars.radii.full,
})

const squareAvatarStyles = style({
  borderRadius: vars.radii.f4,
})

const shapeStyles = {
  circle: circleAvatarStyles,
  square: squareAvatarStyles,
}

const smallAvatarStyles = style({
  width: 40,
  height: 40,
})

const normalAvatarStyles = style({
  width: 48,
  height: 48,
})

const largeAvatarStyles = style({
  height: 56,
  width: 56,
})

const sizeStyles = {
  small: smallAvatarStyles,
  normal: normalAvatarStyles,
  large: largeAvatarStyles,
}

export const avatarStyles = recipe({
  base: baseAvatarStyles,

  variants: {
    size: sizeStyles,
    shape: shapeStyles,
  },

  defaultVariants: {
    size: 'normal',
    shape: 'circle',
  },
})
