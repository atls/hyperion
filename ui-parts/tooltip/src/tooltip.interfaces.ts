import type { CSSProperties }   from 'react'
import type { ReactElement }    from 'react'
import type { ReactPortal }     from 'react'
import type { ReactNode }       from 'react'
import type { LayerProps }      from 'react-laag'
import type { TriggerProps }    from 'react-laag'
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  container?: ContainerFunction | ReactElement<any>
  arrowOptions?: ArrowOptions
}

export interface TooltipProps extends UseTooltipOptions {
  text?: ReactNode
  children: ChildrenFunction | ReactNode
}

export interface UseTooltipReturn {
  isOpen: boolean
  close: VoidFunction
  triggerProps: TriggerProps
  layerProps: LayerProps
  style: CSSProperties
  render: (containerProps: object) => ReactPortal | null
}
