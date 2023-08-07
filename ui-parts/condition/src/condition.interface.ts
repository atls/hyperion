import { ReactNode } from 'react'

export interface ConditionProps {
  match: boolean
  smooth?: boolean
  smoothDuration?: number
  smoothPattern?: 'in' | 'out' | 'in-and-out'
  children: ReactNode | ReactNode[]
}
