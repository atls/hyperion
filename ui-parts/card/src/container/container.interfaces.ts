import type { HTMLMotionProps } from 'framer-motion'
import type { Ref }             from 'react'

export interface ContainerProps extends HTMLMotionProps<'div'> {
  ref?: Ref<HTMLDivElement>
}
