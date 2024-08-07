import React             from 'react'
import clsx              from 'clsx'
import { forwardRef }    from 'react'

import { TextProps }     from './text.interfaces.js'
import { textSprinkles } from './text.css.js'

export const Text = forwardRef<HTMLSpanElement, TextProps>(({ children, ...props }, ref) => {
  const { className, style, otherProps } = textSprinkles(props)

  return (
    <span
      ref={ref}
      {...otherProps}
      className={clsx(className, otherProps?.className)}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </span>
  )
})

Text.defaultProps = {
  display: 'inline-flex',
  color: '$text.black',
  fontSize: '$medium',
  fontWeight: '$regular',
  fontFamily: '$primary',
  lineHeight: '$default',
}
