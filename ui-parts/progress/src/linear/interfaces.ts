import type { HTMLAttributes }           from 'react'

import type { LinearProgressAnimation }  from './indicator/animation/interfaces.js'
import type { LinearProgressAppearance } from './styles/appearance/interfaces.js'
import type { LinearProgressShape }      from './styles/shape/interfaces.js'

export interface LinearProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  value?: number
  shape?: LinearProgressShape
  appearance?: LinearProgressAppearance | 'primary' | 'secondary'
  animation?: LinearProgressAnimation
}
