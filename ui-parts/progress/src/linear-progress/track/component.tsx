import type { ReactNode }       from 'react'
import type { HTMLAttributes }  from 'react'

import type { TrackAppearance } from './styles/appearance/interfaces.js'
import type { TrackShape }      from './styles/shape/interfaces.js'

import { clsx }                 from 'clsx'

import { trackStyles }          from './styles/base.css.js'

export interface TrackProps extends HTMLAttributes<HTMLDivElement> {
  shape: TrackShape
  appearance: TrackAppearance
  children: ReactNode
}

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
