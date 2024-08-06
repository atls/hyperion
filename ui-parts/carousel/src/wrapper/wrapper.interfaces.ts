import { HTMLMotionProps } from 'framer-motion'

export type WrapperPositionDirectionType = 'vertical' | 'horizontal'

export interface WrapperProps extends HTMLMotionProps<'div'> {
  direction?: WrapperPositionDirectionType
}
