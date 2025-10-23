import type { ReactNode }   from 'react'

import type { TextProps }   from './text.interfaces.js'

import { TextElement }      from './text.element.js'
import { defaultTextProps } from './text.constants.js'
import { textSprinkles }    from './text.css.js'

export const Text = ({ children, ref, ...props }: TextProps): ReactNode => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <TextElement ref={ref} sprinkles={textSprinkles as any} {...defaultTextProps} {...props}>
    {children}
  </TextElement>
)
