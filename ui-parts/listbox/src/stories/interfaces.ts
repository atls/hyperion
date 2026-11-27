import type { listboxShapes } from '../styles/shape/variants.js'

export interface ListboxStoryProps {
  shape: keyof typeof listboxShapes
  value: string
  disabled: boolean
}
