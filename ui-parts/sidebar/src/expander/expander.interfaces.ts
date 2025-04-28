import type { HTMLMotionProps } from 'framer-motion'
import type { Ref }             from 'react'

export interface ExpanderProps extends HTMLMotionProps<'div'> {
  opened?: boolean
  ref?: Ref<HTMLDivElement>
}
