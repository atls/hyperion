import type { ReactNode }         from 'react'

import type { LoadingAppearance } from './styles/appearance/interfaces.js'
import type { LoadingShape }      from './styles/shape/interfaces.js'
export interface LoadingProps {
  shape: LoadingShape
  appearance: LoadingAppearance
  loader?: ReactNode
}
