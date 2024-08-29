import type { MotionStyle }        from 'framer-motion'
import type { ReactNode }          from 'react'
import type { LayerSide }          from 'react-laag'
import type { UseLayerArrowProps } from 'react-laag'

export interface ArrowOptions {
  angle?: number
  size?: number
  roundness?: number
  borderWidth?: number
  borderColor?: string
  backgroundColor?: string
}
export interface ContainerElementProps {
  animate?: boolean
  style?: MotionStyle
}

export interface ContainerComponentProps extends ContainerElementProps {
  text?: ReactNode
  showArrow?: boolean
  layerSide?: LayerSide
  arrowProps?: UseLayerArrowProps
  arrowOptions?: ArrowOptions
}
