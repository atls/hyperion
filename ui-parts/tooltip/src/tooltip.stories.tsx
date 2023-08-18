import styled         from '@emotion/styled'

import React          from 'react'
import { useState }   from 'react'

import { Column }     from '@atls-ui-parts/layout'
import { Layout }     from '@atls-ui-parts/layout'
import { Row }        from '@atls-ui-parts/layout'

import { Tooltip }    from './tooltip.component'
import { useTooltip } from './use-tooltip.hook'

export default {
  title: 'Components/Tooltip',
}

const TestContainer = styled.div({ width: 50, height: 30, background: 'green', margin: 0 })

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

export const Base = () => (
  <Column height={150}>
    <Layout minHeight={400} width={1000} pt={50} pl={150}>
      <Tooltip text='test' trigger='click' animate>
        <TestButton>Base</TestButton>
      </Tooltip>
    </Layout>
  </Column>
)

Base.story = {
  name: 'Базовый',
}

export const Hook = () => {
  const { triggerProps, render } = useTooltip({ animate: true })

  return (
    <Row>
      <Layout mt={50}>
        {render('Hook')}
        <TestButton {...triggerProps}>Hook</TestButton>
      </Layout>
    </Row>
  )
}

Hook.story = {
  name: 'Хук',
}

export const Anchor = () => (
  <Column m={50}>
    <Row mb={50}>
      <Layout mr={24}>
        <Tooltip text='test' anchor='top-start'>
          <TestButton>top-start</TestButton>
        </Tooltip>
      </Layout>
      <Layout mr={24}>
        <Tooltip text='test' anchor='top-center'>
          <TestButton>top-center</TestButton>
        </Tooltip>
      </Layout>
      <Layout>
        <Tooltip text='test' anchor='top-end'>
          <TestButton>top-right</TestButton>
        </Tooltip>
      </Layout>
    </Row>
    <Row mb={50}>
      <Layout mr={24}>
        <Tooltip text='test' anchor='bottom-start'>
          <TestButton>bottom-start</TestButton>
        </Tooltip>
      </Layout>
      <Layout mr={24}>
        <Tooltip text='test' anchor='bottom-center'>
          <TestButton>bottom-center</TestButton>
        </Tooltip>
      </Layout>
      <Layout>
        <Tooltip text='test' anchor='bottom-end'>
          <TestButton>bottom-end</TestButton>
        </Tooltip>
      </Layout>
    </Row>
    <Row mb={50}>
      <Layout mr={24}>
        <Tooltip text='test' anchor='left-center'>
          <TestButton>left-center</TestButton>
        </Tooltip>
      </Layout>
    </Row>
    <Row>
      <Layout mr={24}>
        <Tooltip text='test' anchor='right-center'>
          <TestButton>right-center</TestButton>
        </Tooltip>
      </Layout>
    </Row>
  </Column>
)

Anchor.story = {
  name: 'Привязка',
}

export const Trigger = () => (
  <Row>
    <Layout mt={50} mr={24}>
      <Tooltip text='test' trigger='click'>
        <TestButton>Click</TestButton>
      </Tooltip>
    </Layout>
    <Layout mt={50} mr={24}>
      <Tooltip text='test' trigger='hover'>
        <TestButton>Hover</TestButton>
      </Tooltip>
    </Layout>
    <Layout mt={50}>
      <Tooltip text='test' trigger='menu'>
        <TestButton>Context menu</TestButton>
      </Tooltip>
    </Layout>
  </Row>
)

Trigger.story = {
  name: 'Триггер',
}

export const WithArrow = () => (
  <Row>
    <Layout mt={50}>
      <Tooltip text='test' showArrow>
        <TestButton>Arrow</TestButton>
      </Tooltip>
    </Layout>
  </Row>
)

WithArrow.story = {
  name: 'Стрелка',
}

export const WithContainer = () => (
  <Row>
    <Layout mt={50}>
      <Tooltip text='test' container={<TestContainer />}>
        <TestButton>WithContainer</TestButton>
      </Tooltip>
    </Layout>
  </Row>
)

WithContainer.story = {
  name: 'Собственный контейнер',
}

export const Animate = () => (
  <Row>
    <Layout mt={50} mr={24}>
      <Tooltip text='test' animate>
        <TestButton>With animate</TestButton>
      </Tooltip>
    </Layout>
    <Layout mt={50}>
      <Tooltip text='test'>
        <TestButton>Without animate</TestButton>
      </Tooltip>
    </Layout>
  </Row>
)

Animate.story = {
  name: 'Анимация',
}

export const Controlled = () => {
  const [open, setOpen] = useState(false)

  return (
    <Row>
      <Layout mt={50} mr={24}>
        <Tooltip text='test' trigger='hover' isOpen={open} closeOnOutsideClick={false} animate>
          <TestButton>Controlled</TestButton>
        </Tooltip>
      </Layout>
      <Layout mt={50}>
        <TestButton onClick={() => setOpen(!open)}>Click</TestButton>
      </Layout>
    </Row>
  )
}

Controlled.story = {
  name: 'Управляемое открытие',
}
