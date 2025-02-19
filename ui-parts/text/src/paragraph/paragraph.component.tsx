import type { ParagraphProps } from './paragraph.interfaces.js'

import { forwardRef }          from 'react'
import React                   from 'react'

import { ParagraphElement }    from './paragraph.element.js'
import { paragraphSprinkles }  from './paragraph.css.js'

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>((
  { children, ...props },
  ref
) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <ParagraphElement ref={ref} sprinkles={paragraphSprinkles as any} {...props}>
    {children}
  </ParagraphElement>
))

Paragraph.defaultProps = {
  display: 'inline-flex',
  color: '$text.black',
  fontSize: '$medium',
  fontWeight: '$regular',
  fontFamily: '$primary',
  lineHeight: '$default',
}
