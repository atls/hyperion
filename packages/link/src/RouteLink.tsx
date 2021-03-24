import React        from 'react'
import { Link }     from 'react-router-dom'

import { useTheme } from '@emotion/react'

import { LinkUI }   from './LinkUI'

const RouteLinkStyled = LinkUI.withComponent(Link)

export const RouteLink = (props) => {
  const theme = useTheme()

  return <RouteLinkStyled theme={theme} {...props} />
}
