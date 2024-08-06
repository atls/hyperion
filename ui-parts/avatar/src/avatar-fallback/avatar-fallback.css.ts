import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars }   from '@atls-ui-parts/theme'

const baseAvatarFallbackStyles = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: vars.fonts.primary,
  color: vars.colors.white,
})

const smallAvatarFallbackStyles = style({
  fontWeight: vars.fontWeights.bold,
  fontSize: vars.fontSizes.semiRegular,
})

const normalAvatarFallbackStyles = style({
  fontWeight: vars.fontWeights.bold,
  fontSize: vars.fontSizes.regular,
})

const largeAvatarFallbackStyles = style({
  fontWeight: vars.fontWeights.bold,
  fontSize: vars.fontSizes.semiLarge,
})

const sizeStyles = {
  small: smallAvatarFallbackStyles,
  normal: normalAvatarFallbackStyles,
  large: largeAvatarFallbackStyles,
}

export const avatarFallbackStyles = recipe({
  base: baseAvatarFallbackStyles,

  variants: {
    size: sizeStyles,
  },

  defaultVariants: {
    size: 'normal',
  },
})
