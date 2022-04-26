import styled                from '@emotion/styled'

import React                 from 'react'

import { UploadIcon }        from '@atls-ui-admin/icons'

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
      <UploadIcon height={40} width={40} />
    </PlaceholderIcon>
    <PlaceholderAccept>{accept}</PlaceholderAccept>
    <PlaceholderLink>{children}</PlaceholderLink>
  </Container>
)

export { DropzonePlaceholder }
