import { MotionValue }             from 'framer-motion'
import { clsx }                    from 'clsx'
import { motion }                  from 'framer-motion'
import { forwardRef }              from 'react'
import { useMemo }                 from 'react'
import React                       from 'react'

import { ParallaxBoxElementProps } from './parallax-box.interfaces.js'
import { useParallax }             from '../context/index.js'
import { getTransform }            from './parallax-box.utils.js'
import { getTransformDisplay }     from './parallax-box.utils.js'

export const ParallaxBoxElement = forwardRef<HTMLDivElement, ParallaxBoxElementProps>((
  {
    children,
    inputRange,
    pageNumber = 0,
    animations = {},
    ease = 'easeInOut',
    heightMultiplier = 1,
    sprinkles,
    ...props
  },
  ref
) => {
  const { className, style, otherProps } = sprinkles(props)

  const [scrollY, windowHeight] = useParallax()

  const range = useMemo(
    () =>
      inputRange.map(
        (item) => item * heightMultiplier * Number(windowHeight) + Number(windowHeight) * pageNumber
      ),
    [windowHeight, inputRange, pageNumber, heightMultiplier]
  )

  const animatedStyles = useMemo<Record<string, MotionValue<string | number>>>(() => {
    const values: Record<string, MotionValue<string | number>> = {}

    if (!scrollY) return values

    Object.keys(animations).forEach((key: string) => {
      values[key] = getTransform(scrollY, range, animations[key], ease)
    })

    return values
  }, [animations, scrollY, range, ease])

  const displayStyle = useMemo(() => {
    if (!animatedStyles?.display) return {}

    return {
      display: getTransformDisplay(animatedStyles.display),
    }
  }, [animatedStyles])

  return (
    <motion.div
      ref={ref}
      {...otherProps}
      className={clsx(className, otherProps?.className)}
      style={{ ...style, ...otherProps?.style, ...animatedStyles, ...displayStyle }}
    >
      {children}
    </motion.div>
  )
})
