import type { AnchorHTMLAttributes } from 'react'
import type { HTMLAttributes }       from 'react'
import type { ReactNode }            from 'react'

export interface DropzonePlaceholderSlotProps {
  icon?: HTMLAttributes<HTMLSpanElement>
  accept?: HTMLAttributes<HTMLSpanElement>
  link?: AnchorHTMLAttributes<HTMLAnchorElement>
}

export interface DropzonePlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  accept: ReactNode
  slotProps?: DropzonePlaceholderSlotProps
}
