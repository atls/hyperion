import type { MotionValue }             from 'framer-motion'
import type { ReactNode }               from 'react'

import type { ParallaxBoxElementProps } from './parallax-box.interfaces.js'

import { clsx }                         from 'clsx'
import { motion }                       from 'framer-motion'

import { useParallax }                  from '../context/index.js'
import { getTransform }                 from './parallax-box.utils.js'
import { getTransformDisplay }          from './parallax-box.utils.js'

export const ParallaxBoxElement = ({
  children,
  inputRange,
  pageNumber = 0,
  animations = {},
  ease = 'easeInOut',
  heightMultiplier = 1,
  sprinkles,
  ref,
  ...props
}: ParallaxBoxElementProps): ReactNode => {
  const { className, style, otherProps } = sprinkles(props)
  const [scrollY, windowHeight] = useParallax()

  const range = inputRange.map(
    (item) => item * heightMultiplier * Number(windowHeight) + Number(windowHeight) * pageNumber
  )

  const animatedStyles: Record<string, MotionValue<number>> = {}

  if (scrollY) {
    Object.keys(animations).forEach((key: string) => {
      animatedStyles[key] = getTransform(
        scrollY,
        range,
        animations[key],
        ease
      ) as MotionValue<number>
    })
  }

  const displayStyle = animatedStyles?.display
    ? { display: getTransformDisplay(animatedStyles.display) }
    : {}

  return (
    <motion.div
      ref={ref}
      {...otherProps}
      className={clsx(className, String(otherProps?.className || ''))}
      style={{ ...style, ...otherProps?.style, ...animatedStyles, ...displayStyle }}
    >
      {children}
    </motion.div>
  )
}
