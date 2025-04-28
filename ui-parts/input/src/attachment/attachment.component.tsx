import type { ReactNode }       from 'react'

import type { AttachmentProps } from './attachment.interfaces.js'

import { clsx }                 from 'clsx'
import React                    from 'react'

import { attachmentSprinkles }  from './attachment.css.js'
import { attachmentBaseStyles } from './attachment.css.js'

export const Attachment = ({
  children,
  type = 'prefix',
  offsetLeft,
  offsetRight,
  ref,
  ...props
}: AttachmentProps): ReactNode => {
  const typeStyles = type === 'prefix' ? { paddingRight: offsetLeft } : { paddingLeft: offsetRight }
  const { className, style, otherProps } = attachmentSprinkles({ ...props, ...typeStyles })

  return (
    <div
      ref={ref}
      {...otherProps}
      className={clsx(className, attachmentBaseStyles, String(otherProps?.className || ''))}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </div>
  )
}
