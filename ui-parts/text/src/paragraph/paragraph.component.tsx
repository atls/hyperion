import type { ParagraphProps }   from './paragraph.interfaces.js'

import { forwardRef }            from 'react'
import React                     from 'react'

import { ParagraphElement }      from './paragraph.element.js'
import { defaultParagraphProps } from './paragraph.constants.js'
import { paragraphSprinkles }    from './paragraph.css.js'

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>((
  { children, ...props },
  ref
) => (
  <ParagraphElement
    ref={ref}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sprinkles={paragraphSprinkles as any}
    {...defaultParagraphProps}
    {...props}
  >
    {children}
  </ParagraphElement>
))
