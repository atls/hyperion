import { ISelectProps }                                          from 'rc-select/lib/PropTypes'
import { BorderProps, ColorProps, LayoutProps, TypographyProps } from 'styled-system'

export interface SelectProps
  extends BorderProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    ISelectProps {
  children: any
  showSearch: boolean
  multiple: boolean
  invalid: boolean
  showArrow: boolean
  dropdownMaxHeight: string
  itemHoverColor: string
}
