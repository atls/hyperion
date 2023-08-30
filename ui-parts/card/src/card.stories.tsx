import styled                         from '@emotion/styled'

import React                          from 'react'

import { Box }                        from '@atls-ui-parts/layout'
import { Column }                     from '@atls-ui-parts/layout'

import { Backdrop }                   from './backdrop'
import { Container as BaseContainer } from './container'
import { Renderer }                   from './renderer'
import { useCardControls }            from './animation'

export default {
  title: 'Components/Card',
}

const Condition = ({ match, children }) => (match && children) || null

const CardComponent = ({ children, container, backdrop = false, ghost = false }) => {
  const { cardProps, backdropProps, rendererProps, triggerProps, hide } = useCardControls({
    scrollThreshold: true,
  })

  const Container = styled(BaseContainer)({
    backgroundColor: !ghost ? 'red' : 'transparent',
    borderRadius: !ghost ? 10 : 0,
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

const LargeContent = () => {
  const Block = ({ idx }) => (
    <Box backgroundColor={`#${idx.toString().repeat(6)}`} width='100%' height={100}>
      Item no{idx}
    </Box>
  )

  return (
    <Column width='100%'>
      {[...Array(9)].map((i, idx) => (
        <Block idx={idx} />
      ))}
    </Column>
  )
}

export const Card = () => (
  <>
    <CardComponent backdrop container={<h1>Card content</h1>}>
      <button type='button'>Open notify</button>
    </CardComponent>
    <CardComponent ghost container={<LargeContent />}>
      <button type='button'>Open large content</button>
    </CardComponent>
  </>
)
