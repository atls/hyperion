import React  from 'react'

import styled from '@emotion/styled'

const Matched = styled.span({
  background: '#396aab',
})

export const SearchResult = ({ children, match }) => {
  if (!match) {
    return children
  }

  const start = children.toLowerCase().indexOf(match)

  if (start === -1) {
    return children
  }

  const { length } = match

  return [
    <span
      key='start'
      dangerouslySetInnerHTML={{
        __html: children.substr(0, start).replace(/ /g, '&nbsp;'),
      }}
    />,
    <Matched
      key='value'
      dangerouslySetInnerHTML={{
        __html: children.substr(start, length).replace(/ /g, '&nbsp;'),
      }}
    />,
    <span
      key='end'
      dangerouslySetInnerHTML={{
        __html: children.substr(start + length).replace(/ /g, '&nbsp;'),
      }}
    />,
  ]
}
