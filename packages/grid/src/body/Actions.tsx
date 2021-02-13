import React       from 'react'

import styled      from '@emotion/styled'
import { Loading } from '@atlantis-lab/progress'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 60,
  width: '100%',
})

export const Actions = ({ loading, loadMore }: any) => {
  if (!(loading || loadMore)) {
    return null
  }

  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  }

  return <Container>{loadMore}</Container>
}
