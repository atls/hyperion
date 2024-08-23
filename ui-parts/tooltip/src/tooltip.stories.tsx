/* eslint-disable react-hooks/rules-of-hooks */

import { Meta }                from '@storybook/react'
import { StoryObj }            from '@storybook/react'

import React                   from 'react'
import { HTMLAttributes }      from 'react'
import { forwardRef }          from 'react'
import { useState }            from 'react'

import { Column }              from '@atls-ui-parts/layout'
import { Layout }              from '@atls-ui-parts/layout'
import { Row }                 from '@atls-ui-parts/layout'
import { Box }                 from '@atls-ui-parts/layout'

import { Tooltip }             from './tooltip.component.js'
import { testContainerStyles } from './tooltip.css.js'
import { testButtonStyles }    from './tooltip.css.js'
import { useTooltip }          from './use-tooltip.hook.js'

const meta: Meta = {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
}

export default meta

const TestButton = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((
  { children, ...props },
  ref
) => (
  <div ref={ref} className={testButtonStyles} {...props}>
    {children}
  </div>
))

export const Base: StoryObj = {
  name: 'Базовый',
  render: () => (
    <Column fill alignItems='center'>
      <Layout flexBasis='30px' />
      <Tooltip text='test' trigger='click' animate>
        <TestButton>Base</TestButton>
      </Tooltip>
      <Layout flexBasis='30px' />
    </Column>
  ),
}

export const Hook: StoryObj = {
  name: 'Хук',
  render: () => {
    const { triggerProps, render, isOpen } = useTooltip({ animate: true })

    return (
      <Column fill alignItems='center'>
        <Layout flexBasis='30px' />
        {isOpen && render({ text: 'Hook' })}
        <TestButton {...triggerProps}>Hook</TestButton>
        <Layout flexBasis='30px' />
      </Column>
    )
  },
}

export const Anchor: StoryObj = {
  name: 'Привязка',
  render: () => (
    <Column alignItems='center'>
      <Layout flexBasis='50px' />
      <Row width='400px'>
        <Tooltip text='test' anchor='top-start'>
          <TestButton>top-start</TestButton>
        </Tooltip>
        <Layout flexBasis='24px' />
        <Tooltip text='test' anchor='top-center'>
          <TestButton>top-center</TestButton>
        </Tooltip>
        <Layout flexBasis='24px' />
        <Tooltip text='test' anchor='top-end'>
          <TestButton>top-right</TestButton>
        </Tooltip>
      </Row>
      <Layout flexBasis='50px' />
      <Row width='400px'>
        <Tooltip text='test' anchor='bottom-start'>
          <TestButton>bottom-start</TestButton>
        </Tooltip>
        <Layout flexBasis='24px' />
        <Tooltip text='test' anchor='bottom-center'>
          <TestButton>bottom-center</TestButton>
        </Tooltip>
        <Layout flexBasis='24px' />
        <Tooltip text='test' anchor='bottom-end'>
          <TestButton>bottom-end</TestButton>
        </Tooltip>
      </Row>
      <Layout flexBasis='50px' />
      <Row width='400px'>
        <Tooltip text='test' anchor='left-center'>
          <TestButton>left-center</TestButton>
        </Tooltip>
      </Row>
      <Layout flexBasis='50px' />
      <Row width='400px'>
        <Tooltip text='test' anchor='right-center'>
          <TestButton>right-center</TestButton>
        </Tooltip>
      </Row>
      <Layout flexBasis='50px' />
    </Column>
  ),
}

export const Trigger: StoryObj = {
  name: 'Триггер',
  render: () => (
    <Column alignItems='center'>
      <Layout flexBasis='50px' />
      <Row justifyContent='center' alignItems='center'>
        <Tooltip text='test' trigger='click'>
          <TestButton>Click</TestButton>
        </Tooltip>
        <Layout flexBasis='24px' />
        <Tooltip text='test' trigger='hover'>
          <TestButton>Hover</TestButton>
        </Tooltip>
        <Layout flexBasis='24px' />
        <Tooltip text='test' trigger='menu'>
          <TestButton>Context menu</TestButton>
        </Tooltip>
      </Row>
      <Layout flexBasis='50px' />
    </Column>
  ),
}

export const Arrow: StoryObj = {
  name: 'Стрелка',
  render: () => (
    <Column justifyContent='center' alignItems='center'>
      <Layout flexBasis='50px' />
      <Row justifyContent='center' alignItems='center'>
        <Tooltip text='test' showArrow>
          <TestButton>Arrow</TestButton>
        </Tooltip>
        <Layout flexBasis='24px' />
        <Tooltip text='test' showArrow={false}>
          <TestButton>Without arrow</TestButton>
        </Tooltip>
      </Row>
      <Layout flexBasis='50px' />
    </Column>
  ),
}

export const CustomContainer: StoryObj = {
  name: 'Собственный контейнер',
  render: () => (
    <Column justifyContent='center' alignItems='center'>
      <Layout flexBasis='50px' />
      <Tooltip text='test' container={<Box className={testContainerStyles} />}>
        <TestButton>With container</TestButton>
      </Tooltip>
      <Layout flexBasis='50px' />
    </Column>
  ),
}

export const Animate: StoryObj = {
  name: 'Анимация',
  render: () => (
    <Column justifyContent='center' alignItems='center'>
      <Layout flexBasis='50px' />
      <Row justifyContent='center' alignItems='center'>
        <Tooltip text='test' animate>
          <TestButton>With animate</TestButton>
        </Tooltip>
        <Layout flexBasis='24px' />
        <Tooltip text='test'>
          <TestButton>Without animate</TestButton>
        </Tooltip>
      </Row>
      <Layout flexBasis='50px' />
    </Column>
  ),
}

export const Controlled: StoryObj = {
  name: 'Управляемое открытие',
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Column justifyContent='center' alignItems='center'>
        <Layout flexBasis='50px' />
        <Row justifyContent='center' alignItems='center'>
          <Tooltip text='test' trigger='hover' isOpen={open} closeOnOutsideClick={false} animate>
            <TestButton>Controlled</TestButton>
          </Tooltip>
          <Layout flexBasis='24px' />
          <TestButton onClick={() => setOpen(!open)}>Click</TestButton>
        </Row>
        <Layout flexBasis='50px' />
      </Column>
    )
  },
}
