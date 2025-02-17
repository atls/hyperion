import type { RecipeVariants }      from '@vanilla-extract/recipes'
import type { InputHTMLAttributes } from 'react'
import type { JSX }                 from 'react'

import type { inputStyles }         from './styles/index.js'

type InputHTMLAttributesWithoutSize = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export type InputVariants = Pick<
  NonNullable<RecipeVariants<typeof inputStyles>>,
  'size' | 'variant'
>

export interface InputProps extends InputHTMLAttributesWithoutSize, InputVariants {
  icon?: JSX.Element
}
