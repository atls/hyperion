import { HTMLMotionProps }        from 'framer-motion'
import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { ParallaxSprinkles }      from './parallax-box.css.js'

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
  sprinkles: ReturnType<typeof createRainbowSprinkles>
}

export interface ParallaxBoxProps extends BaseParallaxBoxProps, ParallaxSprinkles {}
