import styled                  from '@emotion/styled'
import React, { Children }     from 'react'
import { ifProp }              from 'styled-tools'

import { useHover, withState } from '@atlantis-lab/state'

import { Cell }                from './Cell'

export interface ContainerProps {
  hover?: boolean
}

const Container = styled.div<ContainerProps>(
  () => ({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    borderBottom: '0.5px solid #1f2639',
    boxSizing: 'border-box',
  }),
  ifProp('hover', {
    background: 'rgba(72, 89, 116, 0.3)',
  })
)

const withHover = withState([useHover])

export const Row = withHover(
  ({ columns = [], data = {}, index, hover, onMouseEnter, onMouseLeave }: any) => (
    <Container hover={hover} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {Children.map(columns, column => (
        <Cell
          key={`${data.id}-${column.name}-${index}`}
          column={column}
          index={index}
          hover={hover}
          data={data}
        />
      ))}
    </Container>
  )
)
