export type ButtonSizes = 'small' | 'normal' | 'large'
export type ButtonColors = 'default' | 'primary' | 'secondary'

export interface StyledButtonProps {
  borderRadius?: string | number
  color?: ButtonColors
  size?: ButtonSizes
  equal?: boolean
  fill?: boolean
  justifyContent?: string
}
