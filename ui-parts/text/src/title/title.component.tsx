import type { TitleProps }   from './title.interfaces.js'

import { forwardRef }        from 'react'
import React                 from 'react'

import { TitleElement }      from './title.element.js'
import { defaultTitleProps } from './title.constants.js'
import { titleSprinkles }    from './title.css.js'

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(({ children, ...props }, ref) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <TitleElement ref={ref} sprinkles={titleSprinkles as any} {...defaultTitleProps} {...props}>
    {children}
  </TitleElement>
))
