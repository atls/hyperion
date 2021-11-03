import React                          from 'react'
import styled                         from '@emotion/styled'

import { Box }                        from '@atls-ui-parts/layout'
import { Layout }                     from '@atls-ui-parts/layout'
import { Column }                     from '@atls-ui-parts/layout'

import { useCardControls }            from './animation'
import { Backdrop }                   from './backdrop'
import { Container as BaseContainer } from './container'
import { ScreenConstraint }           from './screen-constraint'

export default {
  title: 'Components/Card',
}

const Condition = ({ match, children }) => (match && children) || null

const CardComponent = ({
  children,
  container,
  onClose = () => {},
  fill = false,
  px = 24,
  py = 24,
  ghost = false,
  backdrop = false,
}) => {
  const { hide, controls, containerNode, onScrollToThreshold, opened, setOpened } = useCardControls(
    { onClose, fill }
  )

  const Container = styled(BaseContainer)({
    backgroundColor: 'white',
    borderRadius: 8,
  })

  return (
    <>
      <Box onClick={() => setOpened(!opened)}>{children}</Box>
      <ScreenConstraint opened={opened} onScroll={onScrollToThreshold}>
        <Condition match={backdrop}>
          <Backdrop opened={opened} onClick={hide} />
        </Condition>
        <Container fill={fill} ref={containerNode} animate={controls}>
          <Layout flexBasis={ghost ? 0 : px} />
          <Column width='100%'>
            <Layout flexBasis={ghost ? 0 : py} />
            {container}
            <Layout flexBasis={ghost ? 0 : py} />
          </Column>
          <Layout flexBasis={ghost ? 0 : px} />
        </Container>
      </ScreenConstraint>
    </>
  )
}

export const Card = () => (
  <CardComponent backdrop fill container={<h1>123</h1>}>
    <button type='button'>Click me</button>
  </CardComponent>
)
