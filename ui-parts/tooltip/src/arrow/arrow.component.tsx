import type { ReactNode }  from 'react'

import type { ArrowProps } from './arrow.interfaces.js'

import { FloatingArrow }   from '@floating-ui/react'

import { Condition }       from '@atls-ui-parts/condition'

export const Arrow = ({ ref, context, arrow = true }: ArrowProps): ReactNode => (
  <Condition match={!!arrow}>
    <FloatingArrow
      ref={ref}
      context={context}
      width={12}
      fill='rgba(0, 0, 0, 0.75)'
      {...(typeof arrow === 'boolean' ? {} : arrow)}
    />
  </Condition>
)
