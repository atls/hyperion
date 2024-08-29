import type { HTMLMotionProps } from 'framer-motion'

export interface BackdropProps extends HTMLMotionProps<'div'> {
  onClick?: () => void
}
