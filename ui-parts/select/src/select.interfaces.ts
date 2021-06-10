import { LayoutProps }     from 'styled-system'
import { ColorProps }      from 'styled-system'
import { TypographyProps } from 'styled-system'
import { FlexboxProps }    from 'styled-system'
import { SpaceProps }      from 'styled-system'
import { BorderProps }     from 'styled-system'

export interface SelectProps
  extends LayoutProps,
    ColorProps,
    TypographyProps,
    FlexboxProps,
    SpaceProps,
    BorderProps {
  items: string[]
  label?: string
  width?: number | string | number[] | string[]
  placeholder?: string
  buttonColor?: string
  dropdownColor?: string
  hoverBackgroundColor?: string
  hoverFontColor?: string
  arrowIcon?: boolean
  arrowSize?: number | string
  onChange: (value: string) => void
}
