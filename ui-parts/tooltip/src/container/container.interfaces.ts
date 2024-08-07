import { MotionStyle }        from 'framer-motion'
import { ReactNode }          from 'react'
import { LayerSide }          from 'react-laag'
import { UseLayerArrowProps } from 'react-laag'

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
