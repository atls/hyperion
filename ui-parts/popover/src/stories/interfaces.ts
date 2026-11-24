import type { PopoverProps }  from '../interfaces.js'
import type { popoverShapes } from '../styles/shape/variants.js'

export interface PopoverStoryProps extends Omit<PopoverProps, 'children' | 'content' | 'shape'> {
  shape: keyof typeof popoverShapes
  interactiveContent: boolean
}
