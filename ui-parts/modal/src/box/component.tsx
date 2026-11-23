import type { ReactNode } from 'react'

import type { BoxProps }  from './interfaces.js'

import { clsx }           from 'clsx'

import { boxStyles }      from './styles/base.css.js'

export const Box = ({
  appearance,
  shape,
  className,
  style,
  ref,
  ...props
}: BoxProps): ReactNode => (
  <div
    ref={ref}
    {...props}
    className={clsx(boxStyles, className)}
    style={{ ...shape, ...appearance, ...style }}
  />
)
