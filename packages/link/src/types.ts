import { LayoutProps } from 'styled-system'

export interface NextLinkProps extends LayoutProps {
  fontFamily?: string
  fontWeight?: string | number | string[] | number[]
  lineHeight?: string | number | string[] | number[]
  fontSize?: string | number | string[] | number[]
  color?: string
  hoverColor?: string
  clickedColor?: string
  href: string
  target?: string
  display?: string
  as?: string
  query?: any
  textTransform?: string
  textAlign?: string
  whiteSpace?: string
  dangerouslySetInnerHTML?: any
  passHref?: boolean
  children?: any
}

export interface LinkProps extends LayoutProps {
  children?: any
  href?: string
  fontWeight?: string | number | string[] | number[]
  lineHeight?: string | number | string[] | number[]
  fontSize?: string | number | string[] | number[]
  fontFamily?: string
  whiteSpace?: string
  dangerouslySetInnerHTML?: any
  color?: string
  hoverColor?: string
  clickedColor?: string
  textTransform?: string
  target?: string
  pt?: string
  onClick?: any
  onMouseOver?: () => void
  onMouseLeave?: () => void
}
