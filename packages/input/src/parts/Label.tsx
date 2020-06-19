import styled                          from '@emotion/styled'
import { color, position, typography } from 'styled-system'

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
