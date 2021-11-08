import React                          from 'react'
import styled                         from '@emotion/styled'

import { useCardControls }            from './animation'
import { Backdrop }                   from './backdrop'
import { Container as BaseContainer } from './container'
import { Renderer }                   from './renderer'

export default {
  title: 'Components/Card',
}

const Condition = ({ match, children }) => (match && children) || null

const CardComponent = ({ children, container, backdrop = false }) => {
  const { cardProps, backdropProps, rendererProps, triggerProps, hide } = useCardControls({
    scrollThreshold: true,
  })

  const Container = styled(BaseContainer)({
    backgroundColor: 'red',
    borderRadius: 8,
    height: 'min-content',
  })

  return (
    <>
      <div {...triggerProps}>{children}</div>
      <Renderer {...rendererProps}>
        <Condition match={backdrop}>
          <Backdrop {...backdropProps} onClick={hide} />
        </Condition>
        <Container {...cardProps}>{container}</Container>
      </Renderer>
    </>
  )
}

export const Card = () => (
  <CardComponent backdrop container={<h1>Card content</h1>}>
    Click me
  </CardComponent>
)
