export interface NextLinkProps {
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
  underline?: boolean
  width?: string
  whiteSpace?: string
  dangerouslySetInnerHTML?: any
  textDecorationStyle?: string
  textDecorationColor?: string
  passHref?: boolean
  children?: any
}

export interface LinkProps {
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
  textDecorationStyle?: string
  textDecorationColor?: string
  clickedColor?: string
  textTransform?: string
  underline?: boolean
  target?: string
  width?: string
  pt?: string
  onClick?: any
  onMouseOver?: () => void
  onMouseLeave?: () => void
}
