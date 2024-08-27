import { clsx }                 from 'clsx'
import { forwardRef }           from 'react'
import React                    from 'react'

import { AttachmentProps }      from './attachment.interfaces.js'
import { attachmentSprinkles }  from './attachment.css.js'
import { attachmentBaseStyles } from './attachment.css.js'

export const Attachment = forwardRef<HTMLDivElement, AttachmentProps>((
  { children, type = 'prefix', offsetLeft, offsetRight, ...props },
  ref
) => {
  const typeStyles = type === 'prefix' ? { paddingRight: offsetLeft } : { paddingLeft: offsetRight }

  const { className, style, otherProps } = attachmentSprinkles({ ...props, ...typeStyles })

  return (
    <div
      ref={ref}
      {...otherProps}
      className={clsx(className, attachmentBaseStyles, otherProps?.className)}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </div>
  )
})
