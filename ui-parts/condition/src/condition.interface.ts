import { PropsWithChildren } from 'react'

export interface ConditionProps extends PropsWithChildren {
  match: boolean
  smooth?: boolean
  smoothDuration?: number
  smoothPattern?: 'in-and-out' | 'in' | 'out'
}
