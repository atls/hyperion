import type { ReactNode }     from 'react'
import type { ReactPortal }   from 'react'
import type { PlacementType } from 'react-laag/dist/PlacementType.js'

import { useState }           from 'react'
import { useLayer }           from 'react-laag'

// eslint-disable-next-line
export const usePopover = (
  placement: PlacementType,
  offset: number = 9,
  trigger: 'click' | 'hover' = 'click'
) => {
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
