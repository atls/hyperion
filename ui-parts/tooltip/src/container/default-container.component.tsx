import React                     from 'react'
import { Arrow }                 from 'react-laag'
import { forwardRef }            from 'react'

import { Container }             from './container.component'
import { DefaultContainerProps } from './container.interfaces'

export const DefaultContainer = forwardRef<HTMLDivElement, DefaultContainerProps>((
  { text, showArrow, arrowOptions, arrowProps, layerSide, ...props },
  ref
) => (
  <Container ref={ref} {...props}>
    {text}
    {showArrow && <Arrow {...layerSide} {...arrowOptions} {...arrowProps} />}
  </Container>
))
