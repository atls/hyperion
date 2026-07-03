import type { ElementType } from 'react'
import type { ReactNode }   from 'react'

export interface ComponentsMatrixVariant {
  children?: ReactNode
  label: string
  props?: Record<string, unknown>
}

export interface ComponentsMatrixItem {
  component: ElementType
  name: string
  variants: Array<ComponentsMatrixVariant>
}

export interface ComponentsMatrixProps {
  components: Array<ComponentsMatrixItem>
  title?: string
}
