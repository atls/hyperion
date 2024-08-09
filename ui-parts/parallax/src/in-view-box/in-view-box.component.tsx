import React                   from 'react'
import { HTMLAttributes }      from 'react'
import { FC }                  from 'react'
import { clsx }                from 'clsx'
import { useInView }           from 'react-intersection-observer'

import { Condition }           from '@atls-ui-parts/condition'

import { baseInViewBoxStyles } from './in-view-box.css.js'

export const InViewBox: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const [ref, inView] = useInView({ triggerOnce: false })

  return (
    <div ref={ref} className={clsx(className, baseInViewBoxStyles)} {...props}>
      <Condition match={inView}>{children}</Condition>
    </div>
  )
}
