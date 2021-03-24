/* eslint-disable react/require-default-props */

import Link              from 'next/link'
import React             from 'react'

import { LinkUI }        from './LinkUI'
import { NextLinkProps } from './types'

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
