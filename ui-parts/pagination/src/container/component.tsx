import type { ReactNode }      from 'react'

import type { ContainerProps } from './interfaces.js'

import { assignInlineVars }    from '@vanilla-extract/dynamic'
import { clsx }                from 'clsx'

import { containerStyles }     from './styles/base.css.js'
import { itemGap }             from './styles/shape/variables.css.js'

export const Container = ({ shape, style, className, ...props }: ContainerProps): ReactNode => (
  <nav
    {...props}
    className={clsx(containerStyles, className)}
    style={{ ...assignInlineVars({ [itemGap]: shape.gap }), ...style }}
  />
)
