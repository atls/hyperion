import { ReactNode } from 'react'

export interface ConditionProps {
  match: boolean
  smooth?: boolean
  smoothDuration?: number
  smoothPattern?: 'in-and-out' | 'in' | 'out'
  children: ReactNode | ReactNode[]
}
