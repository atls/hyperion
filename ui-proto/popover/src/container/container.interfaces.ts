import { LayerSide }          from 'react-laag'
import { UseLayerArrowProps } from 'react-laag'

import { ArrowOptions }       from '@atls-ui-parts/tooltip'

export interface ContainerComponentProps {
  title?: string
  content?: React.ReactElement
  showArrow?: boolean
  animate?: boolean
  layerSide?: LayerSide
  arrowProps?: UseLayerArrowProps
  arrowOptions?: ArrowOptions
}

export interface ContainerElementProps {
  animate?: boolean
  ref?: any
  style?: any
}
