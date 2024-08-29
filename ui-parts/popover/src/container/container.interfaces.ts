import type { ArrowOptions }       from '@atls-ui-parts/tooltip'
import type { MotionStyle }        from 'framer-motion'
import type { ReactNode }          from 'react'
import type { LayerSide }          from 'react-laag'
import type { UseLayerArrowProps } from 'react-laag'

export interface ContainerElementProps {
  animate?: boolean
  style?: MotionStyle
}

export interface ContainerComponentProps extends ContainerElementProps {
  title?: string
  content?: ReactNode
  showArrow?: boolean
  layerSide?: LayerSide
  arrowProps?: UseLayerArrowProps
  arrowOptions?: ArrowOptions
}
