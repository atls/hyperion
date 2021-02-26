import React  from 'react'

import styled from '@emotion/styled'

const getSize = (basis) => ({
  flexBasis: basis,
  flexShrink: basis.includes('px') || basis.includes('%') ? 0 : 1,
})

const getContent = (column, data, index, hover) => {
  if (column.props.renderer) {
    return column.props.renderer(data, { index, hover })
  }

  return null
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 0,
  justifyContent: 'center',
  padding: '4px 0px',
  overflow: 'hidden',
  boxSizing: 'border-box',
  minHeight: '40px',
  paddingLeft: 10,
})

export const Cell = ({ column, data, index, hover }: any) => (
  <Container style={getSize(column.props.basis)}>
    {getContent(column, data, index, hover)}
  </Container>
)
