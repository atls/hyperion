import { UseLayerOptions }       from 'react-laag'
import { Placement }             from 'react-laag'

import { ContainerElementProps } from './container'

export type TooltipTrigger = 'click' | 'hover' | 'menu'

export type LayerDimensions = (layerSide: string) => {
  width: number
  height: number
}

/**
 * @todo Understand how to use them (￣﹏￣；)
 */
export type ContainerFunction = (close: () => void) => React.ReactElement

export type ChildrenFunction = (trigger: boolean, close: () => void) => React.ReactElement

export interface DefaultContainerProps extends ContainerElementProps {
  text?: string | number
  arrow?: JSX.Element
}

export interface ArrowOptions {
  angle?: number | undefined
  size?: number | undefined
  roundness?: number | undefined
  borderWidth?: number | undefined
  borderColor?: string | undefined
  backgroundColor?: string | undefined
}

export interface TooltipProps
  extends Omit<
    UseLayerOptions,
    'placement' | 'onOutsideClick' | 'isOpen' | 'container' | 'trigger'
  > {
  text?: string | number
  trigger?: TooltipTrigger
  showArrow?: boolean
  mouseEnterDelay?: number
  mouseLeaveDelay?: number
  anchor?: Placement
  closeOnOutsideClick?: boolean
  animate?: boolean
  isOpen?: boolean
  container?: React.ReactElement | ContainerFunction
  children: React.ReactElement | ChildrenFunction
  arrowOptions?: ArrowOptions
}
