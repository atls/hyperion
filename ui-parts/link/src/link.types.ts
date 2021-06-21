import { LinkHTMLAttributes } from 'react'
import { TextProps }          from '@atls-ui-parts/text'
import { StyledComponent }    from '@emotion/styled'

interface BaseLinkProps extends TextProps {
  active?: boolean
  activeStyles?: TextProps
}

export type LinkProps = StyledComponent<LinkHTMLAttributes<any>, BaseLinkProps, any>
