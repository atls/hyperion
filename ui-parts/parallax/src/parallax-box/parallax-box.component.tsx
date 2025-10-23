import type { ReactNode }        from 'react'

import type { ParallaxBoxProps } from './parallax-box.interfaces.js'

import { ParallaxBoxElement }    from './parallax-box.element.js'
import { parallaxSprinkles }     from './parallax-box.css.js'

export const ParallaxBox = ({
  children,
  display = 'flex',
  ref,
  ...props
}: ParallaxBoxProps): ReactNode => (
  <ParallaxBoxElement
    ref={ref}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sprinkles={parallaxSprinkles as any}
    {...{ display }}
    {...props}
  >
    {children}
  </ParallaxBoxElement>
)
