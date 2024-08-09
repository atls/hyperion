import { HTMLMotionProps }   from 'framer-motion'

import { ParallaxSprinkles } from './parallax-box.css.js'

export type ParallaxEaseType = 'linear' | 'easeInOut'

export type ParallaxAnimationsType = {
  [key: string]: Array<number | string>
}

export interface ParallaxBoxProps extends HTMLMotionProps<'div'>, ParallaxSprinkles {
  inputRange: number[]
  animations?: ParallaxAnimationsType
  pageNumber?: number
  ease?: ParallaxEaseType
  heightMultiplier?: number
}
