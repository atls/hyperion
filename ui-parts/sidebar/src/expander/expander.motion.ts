import { Variants } from 'framer-motion'

export const expanderMotionVariants: Variants = {
  hidden: {
    width: 80,
    transition: {
      ease: 'linear',
    },
  },
  visible: {
    width: 340,
    transition: {
      ease: 'linear',
    },
  },
}
