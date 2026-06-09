import type { HTMLMotionProps } from 'framer-motion'
import type { CSSProperties }   from 'react'

export interface SelectAppearance {
  highlightedItem: string | undefined
  item: string | undefined
  menu: string | undefined
  trigger: string | undefined
}

export type SelectAppearanceName = 'custom' | 'default'

export interface SelectShape {
  item: string | undefined
  menu: string | undefined
  trigger: string | undefined
}

export type SelectShapeName = 'custom' | 'default'

export interface SelectProps extends HTMLMotionProps<'ul'> {
  appearance?: SelectAppearance
  label: string
  value: string
  onChangeValue: (nextValue: string) => void
  placeholder: string
  items: Array<string>
  shape?: SelectShape
  width?: CSSProperties['width']
}
