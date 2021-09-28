import styled                  from '@emotion/styled'
import React, { useState }     from 'react'

import { Column, Layout, Row } from '@atls-ui-parts/layout'

import { Tooltip }             from './tooltip.component'

export default {
  title: 'Компоненты/Тултип/Примеры',
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

export const Anchor = () => (
  <Column m={50}>
    <Row mb={50}>
      <Layout mr={24}>
        <Tooltip text='test' anchor='TOP_LEFT'>
          <TestButton>TOP_LEFT</TestButton>
        </Tooltip>
      </Layout>
      <Layout mr={24}>
        <Tooltip text='test' anchor='TOP_CENTER'>
          <TestButton>TOP_CENTER</TestButton>
        </Tooltip>
      </Layout>
      <Layout>
        <Tooltip text='test' anchor='TOP_RIGHT' possibleAnchors={['TOP_RIGHT']}>
          <TestButton>TOP_RIGHT</TestButton>
        </Tooltip>
      </Layout>
    </Row>
    <Row mb={50}>
      <Layout mr={24}>
        <Tooltip text='test' anchor='BOTTOM_LEFT'>
          <TestButton>BOTTOM_LEFT</TestButton>
        </Tooltip>
      </Layout>
      <Layout mr={24}>
        <Tooltip text='test' anchor='BOTTOM_CENTER'>
          <TestButton>BOTTOM_CENTER</TestButton>
        </Tooltip>
      </Layout>
      <Layout>
        <Tooltip text='test' anchor='BOTTOM_RIGHT' possibleAnchors={['BOTTOM_RIGHT']}>
          <TestButton>BOTTOM_RIGHT</TestButton>
        </Tooltip>
      </Layout>
    </Row>
    <Row mb={50}>
      <Layout mr={24}>
        <Tooltip text='test' anchor='LEFT_TOP'>
          <TestButton>LEFT_TOP</TestButton>
        </Tooltip>
      </Layout>
      <Layout mr={24}>
        <Tooltip text='test' anchor='LEFT_CENTER'>
          <TestButton>LEFT_CENTER</TestButton>
        </Tooltip>
      </Layout>
      <Layout>
        <Tooltip text='test' anchor='LEFT_BOTTOM' possibleAnchors={['LEFT_BOTTOM']}>
          <TestButton>LEFT_BOTTOM</TestButton>
        </Tooltip>
      </Layout>
    </Row>
    <Row>
      <Layout mr={24}>
        <Tooltip text='test' anchor='RIGHT_TOP'>
          <TestButton>RIGHT_TOP</TestButton>
        </Tooltip>
      </Layout>
      <Layout mr={24}>
        <Tooltip text='test' anchor='RIGHT_CENTER'>
          <TestButton>RIGHT_CENTER</TestButton>
        </Tooltip>
      </Layout>
      <Layout>
        <Tooltip text='test' anchor='RIGHT_BOTTOM' possibleAnchors={['TOP_RIGHT']}>
          <TestButton>RIGHT_BOTTOM</TestButton>
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
      <Tooltip text='test'>
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
