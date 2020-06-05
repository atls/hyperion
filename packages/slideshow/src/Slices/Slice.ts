import { ifProp } from 'styled-tools'

import styled     from '@emotion/styled'

export const Slice = styled.div<any>(
  {
    display: 'flex',
    height: '2px',
    backgroundColor: 'white',
    opacity: '0.5',
    marginRight: '6px',
  },
  ifProp('active', {
    opacity: '1',
  }),
  ifProp('lastSlide', {
    marginRight: '0px',
  })
)
