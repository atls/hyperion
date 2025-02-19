import type { ReactNode }        from 'react'
import type { ReactPortal }      from 'react'
import type { PlacementType }    from 'react-laag/dist/PlacementType.js'

import type { UsePopoverReturn } from './use-popover.interfaces.js'

import { useState }              from 'react'
import { useLayer }              from 'react-laag'

export const usePopover = (
  placement: PlacementType,
  offset: number = 9,
  trigger: 'click' | 'hover' = 'click'
): UsePopoverReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const close = (): void => {
    setIsOpen(false)
  }

  const { layerProps, triggerProps, renderLayer } = useLayer({
    isOpen,
    placement,
    auto: true,
    onOutsideClick: close,
    onDisappear: close,
    triggerOffset: offset,
  })

  const setTrigger = (value: 'click' | 'hover'): object => {
    if (value === 'click')
      return {
        ...triggerProps,
        onClick: (): void => {
          setIsOpen(!isOpen)
        },
      }
    if (value === 'hover') {
      return {
        ...triggerProps,
        onMouseLeave: (): void => {
          setIsOpen(false)
        },
        onMouseEnter: (): void => {
          setIsOpen(true)
        },
      }
    }

    return {}
  }

  const render = (children: ReactNode): ReactPortal | null => renderLayer(isOpen && children)

  return {
    triggerProps: setTrigger(trigger),
    layerProps: {
      ...layerProps,
      style: {
        ...layerProps.style,
      },
    },
    render,
    isOpen,
    setIsOpen,
  }
}
