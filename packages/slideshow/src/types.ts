import { ReactNode } from 'react'

export interface SlideshowProps {
  time?: number
  width?: string | string[]
  transition?: string
  height?: string | string[]
  controlsType?: 'dots' | 'slices'
  children?: any
}
export interface ControlsProps {
  slides?: Array<ReactNode>
  currentSlide?: number
  lastSlide?: number
  activeWidth?: number
  containerWidth?: number
}

export interface ContainerProps {
  containerWidth?: number
}
