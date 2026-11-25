import type { ReactNode }    from 'react'

import type { ListboxProps } from './interfaces.js'

import { clsx }              from 'clsx'

import { Box }               from './box/component.js'
import { listboxBaseStyles } from './styles/base.css.js'
import { resolveMaxHeight }  from './styles/shape/resolve.js'
export const Listbox = ({
  shape,
  appearance,
  status,
  children,
  className,
  style,
  ...props
}: ListboxProps): ReactNode => (
  <Box shape={shape} appearance={appearance}>
    <ul
      {...props}
      className={clsx(listboxBaseStyles, className)}
      style={{
        width: status === undefined ? shape.width : (shape.statusWidth ?? shape.width),
        maxHeight: resolveMaxHeight(shape.maxHeight),
        ...style,
      }}
    >
      {status === undefined ? children : status}
    </ul>
  </Box>
)
