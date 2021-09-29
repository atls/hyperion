import styled              from '@emotion/styled'
import React, { useState } from 'react'

import { Column, Layout }  from '@atls-ui-parts/layout'

import { Popover }         from './popover.component'

export default {
  title: 'Components/Popover',
}

const TestButton = styled.div({
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

const CloseButton = styled.div({
  cursor: 'pointer',
  color: '#1890ff',
})

const TestContent = ({ onClick }) => (
  <div>
    <div>Content</div>
    <CloseButton onClick={onClick}>Close</CloseButton>
  </div>
)

export const Base = () => {
  const [open, setOpen] = useState(false)

  return (
    <Column height={200}>
      <Layout minHeight={400} width={1000} pt={100} pl={150}>
        <Popover
          title='Title'
          trigger='click'
          isOpen={open}
          closeOnOutsideClick={false}
          content={<TestContent onClick={() => setOpen(false)} />}
        >
          <TestButton onClick={() => setOpen(!open)}>Base</TestButton>
        </Popover>
      </Layout>
    </Column>
  )
}

Base.story = {
  name: 'Базовый',
}
