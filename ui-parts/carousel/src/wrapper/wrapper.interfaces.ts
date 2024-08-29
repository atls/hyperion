import type { HTMLMotionProps } from 'framer-motion'

export type WrapperPositionDirectionType = 'horizontal' | 'vertical'

export interface WrapperProps extends HTMLMotionProps<'div'> {
  direction?: WrapperPositionDirectionType
}
