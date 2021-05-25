import { InputProps as BaseInputProps } from '@atls-ui-parts/input'

export type InputSize = 'small' | 'normal' | 'large'

export interface InputProps extends BaseInputProps {
  size?: InputSize
}
