import { MotionValue }      from 'framer-motion'
import { useTransform }     from 'framer-motion'

import { ParallaxEaseType } from './parallax-box.interfaces.js'

export const easingFunctions = {
  easeInOut: (x: number): number => -(Math.cos(Math.PI * x) - 1) / 2,
  linear: (x: number): number => x,
}

export const getTransform = (
  scrollY: MotionValue<number>,
  range: number[],
  outputRange: Array<number | string>,
  ease: ParallaxEaseType
) => useTransform(scrollY, range, outputRange, { ease: easingFunctions[ease] })

export const getTransformDisplay = (display) =>
  useTransform(display, (value: number) => (value > 0 ? 'flex' : 'none'))
