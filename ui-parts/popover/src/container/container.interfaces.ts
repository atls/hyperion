import type { ArrowOptions }       from '@atls-ui-parts/tooltip'
import type { MotionStyle }        from 'framer-motion'
import type { ReactNode }          from 'react'
import type { Ref }                from 'react'
import type { LayerSide }          from 'react-laag'
import type { UseLayerArrowProps } from 'react-laag'

export interface ContainerComponentProps {
  title?: string
  animate?: boolean
  style?: MotionStyle
  content?: ReactNode
  showArrow?: boolean
  layerSide?: LayerSide
  arrowProps?: UseLayerArrowProps
  arrowOptions?: ArrowOptions
  ref?: Ref<HTMLDivElement>
}
