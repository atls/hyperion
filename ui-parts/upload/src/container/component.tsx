import type { ReactNode }      from 'react'

import type { ContainerProps } from './interfaces.js'

import { containerStyles }     from './styles/base.css.js'
import { filesStyles }         from './styles/base.css.js'
export const Container = ({
  shape,
  files,
  style,
  className,
  children,
  ...props
}: ContainerProps): ReactNode => (
  <div
    {...props}
    className={[containerStyles, className].filter(Boolean).join(' ')}
    style={{ width: shape.width, gap: shape.gap, ...style }}
  >
    {children}
    {files != null && files !== false && (
      <div className={filesStyles} style={{ gap: shape.filesGap }}>
        {files}
      </div>
    )}
  </div>
)
