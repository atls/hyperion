import type { ReactNode }  from 'react'

import type { ArrowProps } from './interfaces.js'

import { FloatingArrow }   from '@floating-ui/react'

import { Condition }       from '@atls-ui-parts/condition'
import { vars }            from '@atls-ui-parts/theme'

export const Arrow = ({ ref, context, arrow = true }: ArrowProps): ReactNode => (
  <Condition match={!!arrow}>
    <FloatingArrow
      ref={ref}
      context={context}
      width={16}
      fill={vars.colors.white}
      {...(typeof arrow === 'boolean' ? {} : arrow)}
    />
  </Condition>
)
