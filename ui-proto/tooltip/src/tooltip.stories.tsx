import styled      from '@emotion/styled'

import React       from 'react'

import { Tooltip } from '@atls-ui-parts/tooltip'

export default {
  title: 'Components/Tooltip',
}

const Button = styled.div({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 32,
  padding: '0px 16px',
  color: 'rgba(0, 0, 0, 0.65)',
  backgroundColor: '#fff',
  border: '1px solid #d9d9d9',
  cursor: 'pointer',
  '&:hover, :focus': {
    color: '#40a9ff',
    borderColor: '#40a9ff',
  },
  '&:active': {
    color: '#096dd9',
    borderColor: '#096dd9',
  },
})

export const Base = () => (
  <Tooltip trigger='hover' text='text'>
    <Button>hover</Button>
  </Tooltip>
)
