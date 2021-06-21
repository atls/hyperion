import React                from 'react'
import { withRouter }       from 'next/router'

import { Link }             from './link.component'
import { NextNavLinkProps } from './next-nav-link.interfaces'

const NextNavLink = withRouter(({ router, href, children, ...props }: NextNavLinkProps) => (
  <Link
    href={href}
    active={router && router.asPath === href}
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

export { NextNavLink }
