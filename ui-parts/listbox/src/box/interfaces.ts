import type { HTMLAttributes }    from 'react'
import type { ReactElement }      from 'react'

import type { ListboxAppearance } from './styles/appearance/interfaces.js'
import type { ListboxBoxShape }   from './styles/shape/interfaces.js'
export interface BoxProps {
  children: ReactElement<HTMLAttributes<HTMLUListElement>>
  shape: ListboxBoxShape
  appearance: ListboxAppearance
}
