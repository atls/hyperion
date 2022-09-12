import { styleFn }           from 'styled-system'

import { createShapeStyles } from './shape.styles'

const getGhostStyles = (): styleFn =>
  createShapeStyles({
    size: 'auto',
    paddingRight: 0,
    paddingLeft: 0,
  })

export { getGhostStyles }
