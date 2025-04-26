import type { ReactElement }      from 'react'
import type { ReactPortal }       from 'react'
import type { JSX }               from 'react'

import type { UseTooltipOptions } from './tooltip.interfaces.js'
import type { UseTooltipReturn }  from './tooltip.interfaces.js'

import { AnimatePresence }        from 'framer-motion'
import { cloneElement }           from 'react'
import { useLayer }               from 'react-laag'
import React                      from 'react'

import { Container }              from './container/index.js'
import { useClick }               from './hooks/index.js'
import { useContextMenu }         from './hooks/index.js'
import { useHover }               from './hooks/index.js'

const doNothing = (): void => {
  /** do nothing */
}

export const useTooltip = ({
  anchor = 'top-center',
  animate = false,
  arrowOptions = {
    angle: 30,
    size: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  closeOnOutsideClick = true,
  container = <Container />,
  isOpen,
  mouseEnterDelay = 100,
  mouseLeaveDelay = 100,
  showArrow = true,
  trigger = 'click',
  triggerOffset = 8,
  ...props
}: UseTooltipOptions): UseTooltipReturn => {
  const [isContextMenu, closeContextMenu, contextMenuProps] = useContextMenu()
  const [isClicked, closeClicked, clickedProps] = useClick()
  const [isOver, hoverProps] = useHover({
    delayEnter: mouseEnterDelay,
    delayLeave: mouseLeaveDelay,
  })

  let triggerValues: [boolean, () => void, object] = [false, doNothing, {}]

  if (trigger === 'menu') {
    triggerValues = [isContextMenu, closeContextMenu, contextMenuProps]
  } else if (trigger === 'click') {
    triggerValues = [isClicked, closeClicked, clickedProps]
  } else if (trigger === 'hover') {
    triggerValues = [isOver, doNothing, hoverProps]
  }

  if (typeof isOpen === 'boolean') {
    triggerValues[0] = isOpen
  }

  const [isTriggered, close, customTriggerProps] = triggerValues

  const { arrowProps, triggerProps, layerProps, layerSide, renderLayer } = useLayer({
    isOpen: isTriggered,
    onOutsideClick: closeOnOutsideClick ? close : doNothing,
    placement: anchor,
    triggerOffset,
    ...props,
  })

  const renderContainer = (containerProps: object): JSX.Element | null => {
    if (!isTriggered) return null

    let renderedContainer: ReactElement

    if (typeof container === 'function') {
      renderedContainer = container(close)
    } else {
      renderedContainer = cloneElement(container, {
        ...layerProps,
        ...containerProps,
        animate,
        showArrow,
        arrowProps,
        arrowOptions,
        layerSide,
      })
    }

    if (animate) return <AnimatePresence>{renderedContainer}</AnimatePresence>

    return renderedContainer
  }

  const render = (containerProps: object): ReactPortal | null =>
    renderLayer(renderContainer(containerProps))

  return {
    isOpen: isTriggered,
    close,
    triggerProps: { ...triggerProps, ...customTriggerProps },
    layerProps,
    style: { ...layerProps.style },
    render,
  }
}
