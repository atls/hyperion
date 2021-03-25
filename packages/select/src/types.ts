import { BorderProps, ColorProps, LayoutProps, TypographyProps } from 'styled-system'

export interface SelectProps extends BorderProps, ColorProps, TypographyProps, LayoutProps {
  children: any
  showSearch: boolean
  multiple: boolean
  invalid: boolean
  showArrow: boolean
  dropdownMaxHeight: string
  itemHoverColor: string
}
