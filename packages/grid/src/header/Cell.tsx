import React                   from 'react'
import styled                  from '@emotion/styled'
import { ifProp }              from 'styled-tools'

import { useHover, withState } from '@atlantis-lab/state'

import { Order }               from './Order'

const withHover = withState([useHover])

export interface ContainerProps {
  hover?: boolean
}

const Container = styled.div<ContainerProps>(
  ({ theme }) => ({
    display: 'flex',
    fontFamily: '"Lato", sans-serif',
    padding: '10px 0px',
    overflow: 'hidden',
    boxSizing: 'border-box',
    fontSize: '14px',
    color: '#6d84a9',
    alignItems: 'center',
    cursor: 'pointer',
    paddingLeft: 10,
    outline: 'none',
  }),
  ifProp('hover', {
    background: 'rgba(72, 89, 116, 0.2)',
  })
)

const getContent = column => {
  if (typeof column.props.header === 'function') {
    return column.props.header()
  } else if (column.props.header) {
    return column.props.header
  }

  return column.props.title
}

const getSize = basis => ({
  flexBasis: basis,
  flexShrink: basis.includes('px') || basis.includes('%') ? 0 : 1,
})

export const Cell = withHover(({ column, hover, order, onMouseEnter, onMouseLeave, onOrder }) => (
  <Container
    hover={column.props.orderBy && hover}
    style={getSize(column.props.basis)}
    onMouseEnter={column.props.orderBy && onMouseEnter}
    onMouseLeave={column.props.orderBy && onMouseLeave}
    onClick={() => {
      if (column.props.orderBy) {
        let direction = 'asc'

        if (order && order.by === column.props.orderBy) {
          direction = order.direction === 'asc' ? 'desc' : 'asc'
        }

        if (onOrder) {
          onOrder({ by: column.props.orderBy, direction })
        }
      }
    }}
  >
    {getContent(column)}
    {column.props.orderBy && (hover || (order && order.by === column.props.orderBy)) && (
      <Order direction={order && order.by === column.props.orderBy ? order.direction : null} />
    )}
  </Container>
))
