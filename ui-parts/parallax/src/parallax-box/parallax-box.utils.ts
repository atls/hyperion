/* eslint-disable react-hooks/rules-of-hooks */

import type { MotionValue }      from 'framer-motion'

import type { ParallaxEaseType } from './parallax-box.interfaces.js'

import { useTransform }          from 'framer-motion'

export const easingFunctions = {
  easeInOut: (x: number): number => -(Math.cos(Math.PI * x) - 1) / 2,
  linear: (x: number): number => x,
}

export const getTransform = (
  scrollY: MotionValue<number>,
  range: Array<number>,
  outputRange: Array<number | string>,
  ease: ParallaxEaseType
): MotionValue<number | string> =>
  useTransform(scrollY, range, outputRange, { ease: easingFunctions[ease] })

export const getTransformDisplay = (display: MotionValue<number>): MotionValue<'flex' | 'none'> =>
  useTransform(display, (value: number) => (value > 0 ? 'flex' : 'none'))
