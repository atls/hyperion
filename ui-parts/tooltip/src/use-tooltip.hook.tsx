import React                 from 'react'
import { AnimatePresence }   from 'framer-motion'
import { Arrow }             from 'react-laag'
import { cloneElement }      from 'react'
import { useLayer }          from 'react-laag'
import { useMemo }           from 'react'

import { DefaultContainer }  from './container'
import { TooltipText }       from './tooltip.interfaces'
import { useClick }          from './hooks'
import { useContextMenu }    from './hooks'
import { useHover }          from './hooks'
import { UseTooltipOptions } from './tooltip.interfaces'

const doNothing = () => {}

const useTooltip = ({
  anchor = 'top-center',
  animate = false,
  arrowOptions = {
    angle: 30,
    size: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  closeOnOutsideClick = true,
  container = <DefaultContainer />,
  isOpen,
  mouseEnterDelay = 100,
  mouseLeaveDelay = 100,
  showArrow = true,
  trigger = 'click',
  triggerOffset = 8,
  ...props
}: UseTooltipOptions) => {
  const [isContextMenu, closeContextMenu, contextMenuProps] = useContextMenu()
  const [isClicked, closeClicked, clickedProps] = useClick()
  const [isOver, hoverProps] = useHover({
    delayEnter: mouseEnterDelay,
    delayLeave: mouseLeaveDelay,
  })

  const [isTriggered, close, customTriggerProps] = useMemo(() => {
    let triggerValues: [boolean, () => void, Object] = [false, doNothing, {}]

    if (trigger === 'menu') {
      triggerValues = [isContextMenu, closeContextMenu, contextMenuProps]
    } //
    else if (trigger === 'click') {
      triggerValues = [isClicked, closeClicked, clickedProps]
    } //
    else if (trigger === 'hover') {
      triggerValues = [isOver, doNothing, hoverProps]
    }

    if (typeof isOpen === 'boolean') {
      triggerValues[0] = isOpen
    }

    return triggerValues
  }, [trigger, isOpen, isContextMenu, isClicked, isOver])

  const { arrowProps, triggerProps, layerProps, layerSide, renderLayer } = useLayer({
    isOpen: isTriggered,
    onOutsideClick: closeOnOutsideClick ? close : doNothing,
    placement: anchor,
    triggerOffset,
    ...props,
  })

  const renderContainer = (text: TooltipText) => {
    if (!isTriggered) return null

    let renderedContainer: React.ReactElement

    if (typeof container === 'function') {
      renderedContainer = container(close)
    } else {
      renderedContainer = cloneElement(container!, { ...layerProps, text, animate })
    }

    if (showArrow) {
      const arrow = <Arrow {...layerSide} {...arrowProps} {...arrowOptions} />

      renderedContainer = cloneElement(renderedContainer, { arrow })
    }

    if (animate) return <AnimatePresence>{renderedContainer}</AnimatePresence>

    return renderedContainer
  }

  const render = (text: TooltipText) => renderLayer(renderContainer(text))

  return {
    isOpen: isTriggered,
    close,
    triggerProps: { ...triggerProps, ...customTriggerProps },
    layerProps,
    style: { ...layerProps.style },
    render,
  }
}

export { useTooltip }