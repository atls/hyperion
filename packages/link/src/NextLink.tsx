/* eslint-disable react/require-default-props */

import Link          from 'next/link'
import React         from 'react'

import { withTheme } from '@emotion/react'

import { LinkUI }    from './LinkUI'

interface NextLinkProps {
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
  width?: string
  whiteSpace?: string
  dangerouslySetInnerHTML?: any
  underline?: boolean
  passHref?: boolean
  children?: any
}

export const NextLink = ({
  href,
  children,
  as,
  query,
  passHref = true,
  ...props
}: NextLinkProps) => (
  <Link href={{ pathname: href, query: query || {} }} as={as || href} passHref={passHref}>
    <LinkUI {...props}>{children}</LinkUI>
  </Link>
)

NextLink.defaultProps = {
  fontFamily: 'primary',
  fontWeight: '',
}
