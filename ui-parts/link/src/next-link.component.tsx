import React             from 'react'
import { withRouter }    from 'next/router'

import { Link }          from './link.component'
import { NextLinkProps } from './next-link.interfaces'

const NextLink = withRouter(({ router, href, children, ...props }: NextLinkProps) => (
  <Link
    href={href}
    onClick={(event) => {
      event.preventDefault()

      if (router) {
        router.push(href)
      }
    }}
    {...props}
  >
    {children}
  </Link>
))

export { NextLink }
