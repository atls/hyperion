import type { TextProps }   from './text.interfaces.js'

import { forwardRef }       from 'react'
import React                from 'react'

import { TextElement }      from './text.element.js'
import { defaultTextProps } from './text.constants.js'
import { textSprinkles }    from './text.css.js'

export const Text = forwardRef<HTMLSpanElement, TextProps>(({ children, ...props }, ref) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <TextElement ref={ref} sprinkles={textSprinkles as any} {...defaultTextProps} {...props}>
    {children}
  </TextElement>
))
