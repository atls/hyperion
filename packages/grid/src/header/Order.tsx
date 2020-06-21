import React                          from 'react'
import styled                         from '@emotion/styled'

import { ArrowDownIcon, ArrowUpIcon } from '@atlantis-lab/icons'

export const TextUI = styled.span({
  marginLeft: 4,
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  '& svg:last-child': {
    position: 'relative',
    left: '-3px',
  },
})

export const Order = ({ direction }) => (
  <TextUI>
    <ArrowUpIcon strokeWidth={direction === 'asc' ? 3 : 1} />
    <ArrowDownIcon strokeWidth={direction === 'desc' ? 3 : 1} />
  </TextUI>
)
