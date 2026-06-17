import type { MotionProps } from 'framer-motion'

export const DEFAULT_CONTAINER_HEIGHT = 32

export const DEFAULT_CONTAINER_MIN_WIDTH = 30

export const DEFAULT_CONTAINER_Z_INDEX = 1000

export const animateProps: MotionProps = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { type: 'spring', damping: 30, stiffness: 500 },
}
