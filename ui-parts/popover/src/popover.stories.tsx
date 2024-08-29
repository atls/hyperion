import type { Meta }              from '@storybook/react'
import type { StoryObj }          from '@storybook/react'
import type { FC }                from 'react'
import type { HTMLAttributes }    from 'react'
import type { MouseEventHandler } from 'react'

import { forwardRef }             from 'react'
import React                      from 'react'

import { Column }                 from '@atls-ui-parts/layout'
import { Layout }                 from '@atls-ui-parts/layout'

import { Popover }                from './popover.component.js'
import { closeButtonStyles }      from './popover.css.js'
import { testButtonStyles }       from './popover.css.js'
import { usePopover }             from './use-popover.hook.js'

const meta: Meta = {
  title: 'Components/Popover',
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
      <Layout flexBasis='100px' />
      <Popover
        title='Title'
        trigger='click'
        showArrow={false}
        closeOnOutsideClick={false}
        content={<div>Content</div>}
      >
        <TestButton>Click</TestButton>
      </Popover>
      <Layout flexBasis='100px' />
    </Column>
  ),
}

const TestContent: FC<{ onClick: MouseEventHandler<HTMLButtonElement> }> = ({ onClick }) => (
  <div>
    <div>Content</div>
    <button type='button' className={closeButtonStyles} onClick={onClick}>
      Close
    </button>
  </div>
)

const PopoverHook: FC = () => {
  const { triggerProps, render, close, isOpen } = usePopover({ animate: true })

  return (
    <Column fill alignItems='center'>
      <Layout flexBasis='100px' />
      {/* eslint-disable-next-line react/jsx-no-leaked-render */}
      {isOpen && render({ title: 'Title', content: <TestContent onClick={close} /> })}
      <TestButton {...triggerProps}>Hook</TestButton>
      <Layout flexBasis='100px' />
    </Column>
  )
}

export const Hook: StoryObj = {
  name: 'Хук',
  render: () => <PopoverHook />,
}
