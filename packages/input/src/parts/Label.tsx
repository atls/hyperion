import { color, position, typography } from 'styled-system'

import styled                          from '@emotion/styled'

export const Label = styled.label(
  {
    position: 'absolute',
    backgroundColor: 'white',
    padding: '0 10px',
  },
  color,
  position,
  typography
)
