import type { HTMLMotionProps } from 'framer-motion'

export const defaultLayerProps: HTMLMotionProps<'div'> = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    type: 'spring',
    damping: 30,
    stiffness: 400,
  },
} as const
