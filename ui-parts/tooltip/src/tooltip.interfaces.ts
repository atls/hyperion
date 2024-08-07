import { ReactElement }    from 'react'
import { ReactNode }       from 'react'
import { UseLayerOptions } from 'react-laag'
import { Placement }       from 'react-laag'

import { ArrowOptions }    from './container/index.js'

export type TooltipTrigger = 'click' | 'hover' | 'menu'

export type ContainerFunction = (close: VoidFunction) => ReactElement

export type ChildrenFunction = (trigger: boolean, close: VoidFunction) => ReactElement

type OmitOptions = 'placement' | 'onOutsideClick' | 'isOpen' | 'container' | 'trigger'

export interface UseTooltipOptions extends Omit<UseLayerOptions, OmitOptions> {
  trigger?: TooltipTrigger
  mouseEnterDelay?: number
  anchor?: Placement
  showArrow?: boolean
  mouseLeaveDelay?: number
  closeOnOutsideClick?: boolean
  animate?: boolean
  isOpen?: boolean
  container?: ReactElement | ContainerFunction
  arrowOptions?: ArrowOptions
}

export interface TooltipProps extends UseTooltipOptions {
  text?: ReactNode
  children: ReactElement | ChildrenFunction
}
