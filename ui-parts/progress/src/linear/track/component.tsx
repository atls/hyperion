import type { ReactNode }  from 'react'

import type { TrackProps } from './interfaces.js'

import { clsx }            from 'clsx'

import { trackStyles }     from './styles/base.css.js'

export const Track = ({
  shape,
  appearance,
  className,
  style,
  children,
  ...props
}: TrackProps): ReactNode => (
  <div
    {...props}
    className={clsx(trackStyles, className)}
    style={{
      width: shape.width,
      height: shape.height,
      borderRadius: shape.borderRadius,
      backgroundColor: appearance.backgroundColor,
      boxShadow: appearance.boxShadow,
      ...style,
    }}
  >
    {children}
  </div>
)
