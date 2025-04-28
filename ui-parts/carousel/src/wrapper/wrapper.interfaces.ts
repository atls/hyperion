import type { HTMLMotionProps } from 'framer-motion'
import type { Ref }             from 'react'

export type WrapperPositionDirectionType = 'horizontal' | 'vertical'

export interface WrapperProps extends HTMLMotionProps<'div'> {
  direction?: WrapperPositionDirectionType
  ref?: Ref<HTMLDivElement>
}
