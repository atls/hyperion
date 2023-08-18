import { UseLayerOptions } from 'react-laag'
import { Placement }       from 'react-laag'

import { ArrowOptions }    from './container'

export { ArrowOptions }

export type TooltipTrigger = 'click' | 'hover' | 'menu'

/**
 * @todo Understand how to use them (￣﹏￣；)
 */
export type ContainerFunction = (close: () => void) => React.ReactElement

export type ChildrenFunction = (trigger: boolean, close: () => void) => React.ReactElement

type OmitOptions = 'placement' | 'onOutsideClick' | 'isOpen' | 'container' | 'trigger'

export interface UseTooltipOptions extends Omit<UseLayerOptions, OmitOptions> {
  trigger?: TooltipTrigger
  showArrow?: boolean
  mouseEnterDelay?: number
  mouseLeaveDelay?: number
  anchor?: Placement
  closeOnOutsideClick?: boolean
  animate?: boolean
  isOpen?: boolean
  container?: React.ReactElement | ContainerFunction
  arrowOptions?: ArrowOptions
}

export interface TooltipProps extends UseTooltipOptions {
  text?: string | number
  children: React.ReactElement | ChildrenFunction
}
