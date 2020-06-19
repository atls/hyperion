import styled                                               from '@emotion/styled'
import { boxShadow, color, flexbox, layout, space, system } from 'styled-system'

export const Box = styled.div(
  system({
    boxSizing: true,
  }),
  layout,
  space,
  color,
  flexbox,
  boxShadow
)

Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
