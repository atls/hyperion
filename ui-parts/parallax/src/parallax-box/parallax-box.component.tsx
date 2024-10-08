import type { ParallaxBoxProps } from './parallax-box.interfaces.js'

import { forwardRef }            from 'react'
import React                     from 'react'

import { ParallaxBoxElement }    from './parallax-box.element.js'
import { parallaxSprinkles }     from './parallax-box.css.js'

export const ParallaxBox = forwardRef<HTMLDivElement, ParallaxBoxProps>((
  { children, ...props },
  ref
) => (
  <ParallaxBoxElement ref={ref} sprinkles={parallaxSprinkles as any} {...props}>
    {children}
  </ParallaxBoxElement>
))

ParallaxBox.defaultProps = {
  display: 'flex',
}
