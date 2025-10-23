import type { ReactNode }  from 'react'

import type { ArrowProps } from './interfaces.js'

import { FloatingArrow }   from '@floating-ui/react'

import { Condition }       from '@atls-ui-parts/condition'

export const Arrow = ({ ref, context, arrow = true }: ArrowProps): ReactNode => (
  <Condition match={!!arrow}>
    <FloatingArrow
      ref={ref}
      context={context}
      width={16}
      fill='rgba(255, 255, 255, 1)'
      {...(typeof arrow === 'boolean' ? {} : arrow)}
    />
  </Condition>
)
