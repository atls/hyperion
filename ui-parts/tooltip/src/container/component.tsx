import type { ReactNode }           from 'react'

import type { ContainerProps }      from './interfaces.js'

import { containerAnimationStyles } from './styles/animation.css.js'
import { containerBaseStyles }      from './styles/base.css.js'

export const Container = ({
  ref,
  floatingStyles,
  shape,
  style,
  className,
  ...props
}: ContainerProps): ReactNode => (
  <div
    ref={ref}
    {...props}
    className={[containerBaseStyles, containerAnimationStyles, className].filter(Boolean).join(' ')}
    style={{ ...floatingStyles, ...style }}
  />
)
