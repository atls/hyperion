import React                 from 'react'
import styled                from '@emotion/styled'

import { PlaceholderAccept } from './placeholder-accept'
import { PlaceholderIcon }   from './placeholder-icon'
import { PlaceholderLink }   from './placeholder-link'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const DropzonePlaceholder = ({ accept, children }: any) => (
  <Container>
    <PlaceholderIcon>
      {/* TODO use icon  */}
      Icon
    </PlaceholderIcon>
    <PlaceholderAccept>{accept}</PlaceholderAccept>
    <PlaceholderLink>{children}</PlaceholderLink>
  </Container>
)

export { DropzonePlaceholder }
