import styled              from '@emotion/styled'
import React, { Children } from 'react'

import { Cell }            from './Cell'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  borderBottom: '0.5px solid #1f2639',
  boxSizing: 'border-box',
})

export const Header = ({ columns, order, onOrder }) => (
  <Container>
    {Children.toArray(columns).map((column, index) => (
      <Cell
        key={`header-${column || index}${index}`}
        column={column}
        order={order}
        onOrder={onOrder}
      />
    ))}
  </Container>
)
