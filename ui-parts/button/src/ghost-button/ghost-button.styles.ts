import { styleFn }             from 'styled-system'

import { createBaseStyles }    from '../base'
import { createContentStyles } from '../content'
import { createShapeStyles }   from '../shape'

export const shapeGhostStyles = createShapeStyles({
  size: 'auto',
  paddingRight: 0,
  paddingLeft: 0,
})

export const appearanceGhostStyles: styleFn = () => ({
  background: 'none',
})

export const baseStyles = createBaseStyles()

export const contentStyles = createContentStyles()
