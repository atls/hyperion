import type { DOMAttributes }  from 'react'
import type { HTMLAttributes } from 'react'
import type { ReactNode }      from 'react'
import type { Ref }            from 'react'

import type { BoxAppearance }  from './styles/appearance/interfaces.js'
import type { BoxShape }       from './styles/shape/interfaces.js'

export interface BoxProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  keyof DOMAttributes<HTMLSpanElement> | 'accessKey' | 'autoFocus' | 'contentEditable' | 'tabIndex'
> {
  shape: BoxShape
  appearance: BoxAppearance
  clickable?: boolean
  disabled?: boolean
  children?: ReactNode
  ref?: Ref<HTMLButtonElement | HTMLSpanElement>
}
