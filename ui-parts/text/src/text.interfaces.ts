import { ColorProps }      from 'styled-system'
import { LayoutProps }     from 'styled-system'
import { SpaceProps }      from 'styled-system'
import { TypographyProps } from 'styled-system'

export interface BaseTextProps {
  wordBreak?: string
  whiteSpace?: string
  textTransform?: string
  textOverflow?: string
  cursor?: string
}

export type TextProps = BaseTextProps & ColorProps & SpaceProps & TypographyProps & LayoutProps
