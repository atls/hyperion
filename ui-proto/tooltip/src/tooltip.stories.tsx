import styled      from '@emotion/styled'

import React       from 'react'

import { Tooltip } from '@atls-ui-parts/tooltip'

export default {
  title: 'Components/Tooltip',
}

const Button = styled.div({
  boxSizing: 'border-box',
  alignItems: 'center',
  display: 'flex',
  height: 32,
  justifyContent: 'center',
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
    borderColor: '#096dd9',
    color: '#096dd9',
  },
})

export const Base = () => (
  <Tooltip trigger='click' text='text'>
    <Button>click</Button>
  </Tooltip>
)
