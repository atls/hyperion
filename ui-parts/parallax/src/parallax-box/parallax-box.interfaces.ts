import type { HTMLMotionProps }   from 'framer-motion'
import type { SprinklesFn }       from 'rainbow-sprinkles'

import type { ParallaxSprinkles } from './parallax-box.css.js'

export type ParallaxEaseType = 'easeInOut' | 'linear'

export type ParallaxAnimationsType = Record<string, Array<number | string>>

export interface BaseParallaxBoxProps extends HTMLMotionProps<'div'> {
  inputRange: Array<number>
  animations?: ParallaxAnimationsType
  pageNumber?: number
  ease?: ParallaxEaseType
  heightMultiplier?: number
}

export interface ParallaxBoxElementProps extends BaseParallaxBoxProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sprinkles: SprinklesFn<any>
}

export interface ParallaxBoxProps extends BaseParallaxBoxProps, ParallaxSprinkles {}
