import { ReactNode } from 'react'

export interface SlideshowProps {
  time?: number
  controlsType?: 'dots' | 'slices'
  children?: Array<ReactNode>
}
export interface ControlsProps {
  slides?: Array<ReactNode>
  currentSlide?: number
  lastSlide?: number
  containerWidth?: number
}

export interface ContainerProps {
  containerWidth?: number
}
