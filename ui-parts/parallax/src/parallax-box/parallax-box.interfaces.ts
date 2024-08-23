import { HTMLMotionProps }   from 'framer-motion'
import { SprinklesFn }       from 'rainbow-sprinkles/createRuntimeFn'

import { ParallaxSprinkles } from './parallax-box.css.js'

export type ParallaxEaseType = 'linear' | 'easeInOut'

export type ParallaxAnimationsType = {
  [key: string]: Array<number | string>
}

export interface BaseParallaxBoxProps extends HTMLMotionProps<'div'> {
  inputRange: number[]
  animations?: ParallaxAnimationsType
  pageNumber?: number
  ease?: ParallaxEaseType
  heightMultiplier?: number
}

export interface ParallaxBoxElementProps extends BaseParallaxBoxProps {
  sprinkles: SprinklesFn<any>
}

export interface ParallaxBoxProps extends BaseParallaxBoxProps, ParallaxSprinkles {}
