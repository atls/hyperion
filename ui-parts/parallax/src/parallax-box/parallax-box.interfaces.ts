import type { HTMLMotionProps }   from 'framer-motion'
import type { SprinklesFn }       from 'rainbow-sprinkles/createRuntimeFn'

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
  sprinkles: SprinklesFn<any>
}

export interface ParallaxBoxProps extends BaseParallaxBoxProps, ParallaxSprinkles {}
