import type { PropsWithChildren } from 'react'
import type { ReactNode }         from 'react'

import type { PopoverAppearance } from '../interfaces.js'
import type { PopoverShape }      from '../interfaces.js'

export interface ContainerProps extends PropsWithChildren {
  appearance?: PopoverAppearance
  title?: string
  content?: ReactNode
  shape?: PopoverShape
}
