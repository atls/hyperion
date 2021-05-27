import { ColorProps, LayoutProps, SpaceProps, TypographyProps } from 'styled-system'

export interface BaseTextProps {
  wordBreak?: string
  whiteSpace?: string
  textTransform?: string
  textOverflow?: string
  cursor?: string
}

export type TextProps = BaseTextProps & ColorProps & SpaceProps & TypographyProps & LayoutProps
