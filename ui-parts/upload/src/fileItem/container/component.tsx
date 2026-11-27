import type { ReactNode }              from 'react'

import type { FileItemContainerProps } from './interfaces.js'

import { containerStyles }             from './styles/base.css.js'
import { rowStyles }                   from './styles/base.css.js'
export const Container = ({
  shape,
  action,
  progress,
  children,
  className,
  style,
  ...props
}: FileItemContainerProps): ReactNode => (
  <div
    {...props}
    className={[containerStyles, className].filter(Boolean).join(' ')}
    style={{
      width: shape.width,
      paddingInline: shape.paddingInline,
      paddingBlock: shape.paddingBlock,
      gap: shape.gap,
      ...style,
    }}
  >
    <div className={rowStyles} style={{ gap: shape.rowGap }}>
      {children}
      {action}
    </div>
    {progress}
  </div>
)
