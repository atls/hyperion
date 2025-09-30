import type { MotionProps } from 'framer-motion'

export const smoothProps: MotionProps = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  exit: { opacity: 0.5 },
  transition: { duration: 0.3 },
}
