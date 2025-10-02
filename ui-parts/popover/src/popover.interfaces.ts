import type { UseFloatProps }      from '@atls-utils/use-float'
import type { FloatingArrowProps } from '@floating-ui/react'
import type { MotionProps }        from 'framer-motion'
import type { JSX }                from 'react'
import type { ReactNode }          from 'react'

export interface PopoverProps extends UseFloatProps {
  children: JSX.Element
  title?: string
  content?: ReactNode
  container?: JSX.Element
  animated?: Omit<MotionProps, 'children'> | boolean
  arrow?: Omit<FloatingArrowProps, 'context'> | boolean
}
