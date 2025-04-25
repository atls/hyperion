import type { MotionStyle }        from 'framer-motion'
import type { ReactNode }          from 'react'
import type { LayerSide }          from 'react-laag'
import type { UseLayerArrowProps } from 'react-laag'
import type { Arrow }              from 'react-laag'

export type ArrowOptions = Pick<
  Parameters<typeof Arrow>[0],
  'angle' | 'backgroundColor' | 'borderColor' | 'borderWidth' | 'roundness' | 'size'
>

export interface ContainerComponentProps {
  animate?: boolean
  style?: MotionStyle
  text?: ReactNode
  showArrow?: boolean
  layerSide?: LayerSide
  arrowProps?: UseLayerArrowProps
  arrowOptions?: ArrowOptions
}
