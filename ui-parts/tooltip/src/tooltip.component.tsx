import React                 from 'react'
import { AnimatePresence }   from 'framer-motion'
import { Children }          from 'react'
import { PropsWithChildren } from 'react'
import { FC }                from 'react'
import { Arrow }             from 'react-laag'
import { cloneElement }      from 'react'
import { forwardRef }        from 'react'
import { useLayer }          from 'react-laag'

import { Container }         from './container'
import { TooltipProps }      from './tooltip.interfaces'
import { useClick }          from './hooks'
import { useContextMenu }    from './hooks'
import { useHover }          from './hooks'

const doNothing = () => {
  // do nothing
}

const DefaultContainer = forwardRef(({ text, arrow, ...props }: any, ref) => (
  <Container ref={ref} {...props}>
    {text}
    {arrow}
  </Container>
))

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  text,
  trigger = 'hover',
  showArrow,
  mouseEnterDelay,
  mouseLeaveDelay,
  anchor,
  closeOnOutsideClick,
  isOpen,
  children,
  container,
  animate,
  arrowOptions,
  ...props
}) => {
  const [isOver, hoverProps] = useHover({
    delayEnter: mouseEnterDelay,
    delayLeave: mouseLeaveDelay,
  })
  const [isContextMenu, closeContextMenu, contextMenuProps] = useContextMenu()
  const [isClicked, closeClicked, clickedProps] = useClick()

  const getClose = (): (() => void) => {
    if (trigger === 'click') return closeClicked
    if (trigger === 'menu') return closeContextMenu

    return doNothing
  }

  const getTrigger = (): boolean => {
    if (typeof isOpen === 'boolean') {
      return isOpen
    }
    if (trigger === 'hover') return isOver
    if (trigger === 'click') return isClicked
    if (trigger === 'menu') return isContextMenu

    return false
  }

  const { triggerProps, layerProps, layerSide, arrowProps, renderLayer } = useLayer({
    isOpen: getTrigger(),
    onOutsideClick: closeOnOutsideClick ? getClose() : doNothing,
    placement: anchor,
    ...props,
  })

  const getTriggerProps = () => {
    if (trigger === 'hover') return { ...triggerProps, ...hoverProps }
    if (trigger === 'click') return { ...triggerProps, ...clickedProps }
    if (trigger === 'menu') return { ...triggerProps, ...contextMenuProps }

    return triggerProps
  }

  const getChildrenControls = (): [boolean, () => void] => {
    if (trigger === 'click' || trigger === 'menu') return [getTrigger(), getClose()]

    return [getTrigger(), doNothing]
  }

  const getContainerControls = (): [() => void] => {
    if (trigger === 'click' || trigger === 'menu') return [getClose()]

    return [doNothing]
  }

  const renderChildren = () => {
    if (typeof children === 'function') return children(...getChildrenControls())

    return Children.only(
      cloneElement(children as any, {
        ...getTriggerProps(),
      })
    )
  }
  const renderContainerWithoutArrow = () => {
    if (typeof container === 'function') return container(...getContainerControls())

    return cloneElement(container!, {
      ...layerProps,
      text,
    })
  }
  const renderContainerWithArrow = () => {
    const renderedContainer = renderContainerWithoutArrow()

    const arrow = <Arrow {...layerSide} {...arrowProps} {...arrowOptions} />

    return cloneElement(renderedContainer, { arrow })
  }
  const renderContainer = () => {
    if (showArrow) return renderContainerWithArrow()

    return renderContainerWithoutArrow()
  }

  if (animate) {
    return (
      <>
        {renderChildren()}
        {renderLayer(<AnimatePresence>{getTrigger() && renderContainer()}</AnimatePresence>)}
      </>
    )
  }

  return (
    <>
      {renderChildren()}
      {renderLayer(getTrigger() && renderContainer())}
    </>
  )
}

Tooltip.defaultProps = {
  trigger: 'click',
  showArrow: true,
  arrowOptions: {
    angle: 30,
    size: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  mouseEnterDelay: 100,
  mouseLeaveDelay: 100,
  anchor: 'top-center',
  triggerOffset: 8,
  animate: false,
  closeOnOutsideClick: true,
  container: <DefaultContainer />,
  text: 'Text',
}
