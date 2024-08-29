import type { HTMLMotionProps } from 'framer-motion'

export interface ExpanderProps extends HTMLMotionProps<'div'> {
  opened?: boolean
}
