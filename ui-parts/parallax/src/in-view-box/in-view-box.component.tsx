import type { HTMLAttributes } from 'react'
import type { ReactNode }      from 'react'

import { clsx }                from 'clsx'
import { useInView }           from 'react-intersection-observer'
import React                   from 'react'

import { Condition }           from '@atls-ui-parts/condition'

import { baseInViewBoxStyles } from './in-view-box.css.js'

export const InViewBox = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactNode => {
  const [ref, inView] = useInView({ triggerOnce: false })

  return (
    <div ref={ref} className={clsx(className, baseInViewBoxStyles)} {...props}>
      <Condition match={inView}>{children}</Condition>
    </div>
  )
}
