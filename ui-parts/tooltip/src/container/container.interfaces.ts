import { LayerSide }          from 'react-laag'
import { UseLayerArrowProps } from 'react-laag'

export interface ArrowOptions {
  angle?: number | undefined
  size?: number | undefined
  roundness?: number | undefined
  borderWidth?: number | undefined
  borderColor?: string | undefined
  backgroundColor?: string | undefined
}
export interface ContainerElementProps {
  animate?: boolean
  ref?: any
  style?: any
}

export interface ContainerComponentProps extends ContainerElementProps {
  text?: string | number
  showArrow?: boolean
  layerSide?: LayerSide
  arrowProps?: UseLayerArrowProps
  arrowOptions?: ArrowOptions
}
