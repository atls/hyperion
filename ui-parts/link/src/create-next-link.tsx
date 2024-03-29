import React          from 'react'
import { withRouter } from 'next/router'

export const createNextLink = (Link, pathProp = 'path') =>
  withRouter(({ router, ...props }) => (
    <Link
      {...{ [pathProp]: props[pathProp] }}
      onClick={(event) => {
        event.preventDefault()

        if (router) {
          router.push(props[pathProp])
        }
      }}
      {...props}
    />
  ))
