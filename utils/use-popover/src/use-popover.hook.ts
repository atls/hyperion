import { PlacementType } from 'react-laag/dist/PlacementType'
import { useState }      from 'react'
import { useLayer }      from 'react-laag'

export const usePopover = (placement: PlacementType, offset = 9, trigger = 'click') => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const close = () => setOpen(false)

  const { layerProps, triggerProps, renderLayer } = useLayer({
    isOpen,
    placement,
    auto: true,
    onOutsideClick: close,
    onDisappear: close,
    triggerOffset: offset,
  })

  const setTrigger = (value) => {
    if (value === 'click') {
      return { ...triggerProps, onClick: () => setOpen(!isOpen) }
    }
    if (value === 'hover') {
      return {
        ...triggerProps,
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
      }
    }

    return {}
  }

  const render = (children) => renderLayer(isOpen && children)

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
    setOpen,
  }
}
