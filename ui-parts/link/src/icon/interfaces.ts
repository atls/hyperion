import type { ReactNode }      from 'react'

import type { IconAppearance } from './styles/appearance/interfaces.js'
import type { IconShape }      from './styles/shape/interfaces.js'
export interface IconProps {
  children: ReactNode
  shape: IconShape
  appearance: IconAppearance
}
