import type { MotionProps }       from 'framer-motion'
import type { PropsWithChildren } from 'react'

export interface ContainerProps extends PropsWithChildren, Omit<MotionProps, 'children'> {
  animated?: boolean
  open?: boolean
}
