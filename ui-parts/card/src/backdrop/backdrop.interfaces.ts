import type { HTMLMotionProps } from 'framer-motion'
import type { Ref }             from 'react'

export interface BackdropProps extends HTMLMotionProps<'div'> {
  ref?: Ref<HTMLDivElement>
}
