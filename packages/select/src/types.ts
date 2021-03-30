import { ISelectProps }                                          from 'rc-select/lib/PropTypes'
import { BorderProps, ColorProps, LayoutProps, TypographyProps } from 'styled-system'

export interface SelectProps
  extends BorderProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    ISelectProps {
  invalid?: boolean
  dropdownMaxHeight?: string
  itemHoverColor: string
}
