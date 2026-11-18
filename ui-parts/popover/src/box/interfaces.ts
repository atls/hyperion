import type { ReactNode } from 'react'

import type { BoxShape }  from './styles/shape/interfaces.js'
export interface BoxProps {
  children: ReactNode
  shape: BoxShape
}
