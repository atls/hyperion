import React          from 'react'
import { withRouter } from 'next/router'

export const createNextNavLink = (Link, pathProp = 'path') =>
  withRouter(({ router, ...props }) => (
    <Link
      {...{ [pathProp]: props[pathProp] }}
      active={router && router.asPath === props[pathProp]}
      onClick={(event) => {
        event.preventDefault()

        if (router) {
          router.push(props[pathProp])
        }
      }}
      {...props}
    />
  ))
