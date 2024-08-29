import type { ReactElement }    from 'react'
import type { ReactNode }       from 'react'
import type { UseLayerOptions } from 'react-laag'
import type { Placement }       from 'react-laag'

import type { ArrowOptions }    from './container/index.js'

export type TooltipTrigger = 'click' | 'hover' | 'menu'

export type ContainerFunction = (close: VoidFunction) => ReactElement

export type ChildrenFunction = (trigger: boolean, close: VoidFunction) => ReactElement

type OmitOptions = 'container' | 'isOpen' | 'onOutsideClick' | 'placement' | 'trigger'

export interface UseTooltipOptions extends Omit<UseLayerOptions, OmitOptions> {
  trigger?: TooltipTrigger
  mouseEnterDelay?: number
  anchor?: Placement
  showArrow?: boolean
  mouseLeaveDelay?: number
  closeOnOutsideClick?: boolean
  animate?: boolean
  isOpen?: boolean
  container?: ContainerFunction | ReactElement
  arrowOptions?: ArrowOptions
}

export interface TooltipProps extends UseTooltipOptions {
  text?: ReactNode
  children: ChildrenFunction | ReactElement
}
