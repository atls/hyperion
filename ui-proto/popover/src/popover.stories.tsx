import styled         from '@emotion/styled'

import React          from 'react'

import { Column }     from '@atls-ui-parts/layout'
import { Layout }     from '@atls-ui-parts/layout'
import { Row }        from '@atls-ui-parts/layout'

import { Popover }    from './popover.component'
import { usePopover } from './use-popover.hook'

export default {
  title: 'Components/Popover',
}

const TestButton = styled.div({
  display: 'flex',
  boxSizing: 'border-box',
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

export const Base = () => (
  <Column height={200}>
    <Layout minHeight={400} width={1000} pt={100} pl={150}>
      <Popover
        title='Title'
        trigger='click'
        showArrow={false}
        closeOnOutsideClick={false}
        content={<div>Content</div>}
      >
        <TestButton>Base</TestButton>
      </Popover>
    </Layout>
  </Column>
)

Base.story = {
  name: 'Базовый',
}

export const Hook = () => {
  const { triggerProps, render, close } = usePopover({ animate: true })

  return (
    <Row>
      <Layout mt={50}>
        {render({ title: 'Title', content: <TestContent onClick={close} /> })}
        <TestButton {...triggerProps}>Hook</TestButton>
      </Layout>
    </Row>
  )
}

Hook.story = {
  name: 'Хук',
}
