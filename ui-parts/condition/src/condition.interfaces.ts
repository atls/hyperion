import type { MotionProps }       from 'framer-motion'
import type { PropsWithChildren } from 'react'

export interface ConditionProps extends PropsWithChildren, Omit<MotionProps, 'children'> {
  match: boolean
  fallback?: PropsWithChildren['children']
  animated?: boolean | 'smooth'
}
