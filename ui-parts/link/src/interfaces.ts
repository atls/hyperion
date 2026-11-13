import type { ReactNode }      from 'react'

import type { ContainerProps } from './container/interfaces.js'
import type { LinkAppearance } from './styles/appearance/interfaces.js'
import type { LinkShape }      from './styles/shape/interfaces.js'
export interface LinkProps extends Omit<ContainerProps, 'shape'> {
  variant?: 'inline' | 'standalone'
  shape?: LinkShape
  appearance?: LinkAppearance | 'inline' | 'standalone'
  icon?: ReactNode
}
