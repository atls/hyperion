import { MotionStyle }        from 'framer-motion'
import { ReactNode }          from 'react'
import { LayerSide }          from 'react-laag'
import { UseLayerArrowProps } from 'react-laag'

import { ArrowOptions }       from '@atls-ui-parts/tooltip'

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
