import React                     from 'react'
import { forwardRef }            from 'react'

import { Container }             from './container.component'
import { DefaultContainerProps } from './container.interfaces'

export const DefaultContainer = forwardRef<HTMLDivElement, DefaultContainerProps>(
  ({ text, arrow, ...props }, ref) => (
    <Container ref={ref} {...props}>
      {text}
      {arrow}
    </Container>
  )
)