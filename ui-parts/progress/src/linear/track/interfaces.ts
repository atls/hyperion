import type { HTMLAttributes }  from 'react'
import type { ReactNode }       from 'react'

import type { TrackAppearance } from './styles/appearance/interfaces.js'
import type { TrackShape }      from './styles/shape/interfaces.js'

export interface TrackProps extends HTMLAttributes<HTMLDivElement> {
  shape: TrackShape
  appearance: TrackAppearance
  children: ReactNode
}
