import type { TextProps } from './text.interfaces.js'

import { forwardRef }     from 'react'
import React              from 'react'

import { TextElement }    from '@atls-ui-parts/text'

import { textSprinkles }  from './text.css.js'

export const Text = forwardRef<HTMLSpanElement, TextProps>(({ children, ...props }, ref) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <TextElement ref={ref} sprinkles={textSprinkles as any} {...props}>
    {children}
  </TextElement>
))

Text.defaultProps = {
  display: 'inline-flex',
  color: '$text.primary',
  fontSize: '$medium',
  fontWeight: '$regular',
  fontFamily: '$primary',
  lineHeight: '$default',
}
