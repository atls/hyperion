import { Meta }              from '@storybook/react'
import { StoryObj }          from '@storybook/react'

import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'
import { ReactNode }         from 'react'

import { Button }            from '@atls-ui-parts/button'
import { Condition }         from '@atls-ui-parts/condition'
import { Column }            from '@atls-ui-parts/layout'
import { Layout }            from '@atls-ui-parts/layout'
import { Box }               from '@atls-ui-parts/layout'

import { Backdrop }          from './backdrop/index.js'
import { Container }         from './container/index.js'
import { Renderer }          from './renderer/index.js'
import { useCardControls }   from './animation/index.js'

const meta: Meta = {
  title: 'Components/Card',
  tags: ['autodocs'],
}

export default meta

interface CardProps extends PropsWithChildren {
  backdrop?: boolean
  ghost?: boolean
  container?: ReactNode
}

const Card: FC<CardProps> = ({ children, container, backdrop = false, ghost = false }) => {
  const { cardProps, backdropProps, rendererProps, triggerProps, hide } = useCardControls({
    scrollThreshold: true,
  })

  return (
    <Column fill alignItems='center'>
      <Layout flexBasis='30px' />
      <Box {...triggerProps}>{children}</Box>
      <Renderer {...rendererProps}>
        <Condition match={backdrop}>
          <Backdrop {...backdropProps} onClick={hide} />
        </Condition>
        <Container
          {...cardProps}
          style={{
            height: 'min-content',
            borderRadius: !ghost ? 10 : 0,
            backgroundColor: !ghost ? 'red' : 'transparent',
          }}
        >
          {container}
        </Container>
      </Renderer>
      <Layout flexBasis='30px' />
    </Column>
  )
}

export const CardNotify: StoryObj = {
  name: 'Базовый',
  render: () => (
    <Card backdrop container={<h1>Card content</h1>}>
      <Button size='small'>Open notify</Button>
    </Card>
  ),
}

const LargeContent: FC = () => (
  <Column width='100%'>
    {Array.from({ length: 9 }, (_, index) => (
      <Box
        width='100%'
        height='100px'
        color='$white'
        alignItems='center'
        style={{ backgroundColor: `#${(index + 1).toString().repeat(6)}` }}
      >
        <Layout flexBasis='20px' />
        Item number {index}
      </Box>
    ))}
  </Column>
)

export const CardLarge: StoryObj = {
  name: 'Много контента',
  render: () => (
    <Card ghost container={<LargeContent />}>
      <Button size='small'>Open large content</Button>
    </Card>
  ),
}
