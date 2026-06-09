import type { HTMLMotionProps } from 'framer-motion'
import type { CSSProperties }   from 'react'

export interface SelectAppearance {
  highlightedItem?: string
  item?: string
  menu?: string
  trigger?: string
}

export type SelectAppearanceName = 'default'

export interface SelectShape {
  item?: string
  menu?: string
  trigger?: string
}

export type SelectShapeName = 'default'

export interface SelectProps {
  appearance?: SelectAppearance
  label: string
  value: string
  onChangeValue: (nextValue: string) => void
  placeholder: string
  items: Array<string>
  menuProps?: HTMLMotionProps<'ul'>
  shape?: SelectShape
  width?: CSSProperties['width']
}
