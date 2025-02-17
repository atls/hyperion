import type { RecipeVariants }       from '@vanilla-extract/recipes'
import type { ButtonHTMLAttributes } from 'react'
import type { JSX }                  from 'react'

import type { buttonStyles }         from './styles/index.js'

export type ButtonVariants = Pick<
  NonNullable<RecipeVariants<typeof buttonStyles>>,
  'size' | 'variant'
>

export enum IconPlacement {
  LEFT = 'Left',
  RIGHT = 'Right',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  icon?: JSX.Element
  iconPlacement?: IconPlacement
}
