import type { ReactNode }    from 'react'

import type { TitleProps }   from './title.interfaces.js'

import React                 from 'react'

import { TitleElement }      from './title.element.js'
import { defaultTitleProps } from './title.constants.js'
import { titleSprinkles }    from './title.css.js'

export const Title = ({ children, ref, ...props }: TitleProps): ReactNode => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <TitleElement ref={ref} sprinkles={titleSprinkles as any} {...defaultTitleProps} {...props}>
    {children}
  </TitleElement>
)
