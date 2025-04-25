import type { MotionProps } from 'framer-motion'

export const animateProps: MotionProps = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { type: 'spring', damping: 30, stiffness: 500 },
}
