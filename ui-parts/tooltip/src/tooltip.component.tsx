import React                     from 'react'
import { AnimatePresence }       from 'framer-motion'
import { Arrow }                 from 'react-laag'
import { Children }              from 'react'
import { cloneElement }          from 'react'
import { FC }                    from 'react'
import { forwardRef }            from 'react'
import { PropsWithChildren }     from 'react'
import { useLayer }              from 'react-laag'
import { useMemo }               from 'react'

import { Container }             from './container'
import { DefaultContainerProps } from './tooltip.interfaces'
import { TooltipProps }          from './tooltip.interfaces'
import { useClick }              from './hooks'
import { useContextMenu }        from './hooks'
import { useHover }              from './hooks'

const doNothing = () => {}

const DefaultContainer = forwardRef<HTMLDivElement, DefaultContainerProps>(
  ({ text, arrow, ...props }, ref) => (
    <Container ref={ref} {...props}>
      {text}
      {arrow}
    </Container>
  )
)

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  anchor,
  animate,
  arrowOptions,
  children,
  closeOnOutsideClick,
  container,
  isOpen,
  mouseEnterDelay,
  mouseLeaveDelay,
  showArrow,
  text,
  trigger = 'click',
  ...props
}) => {
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
    ...props,
  })

  const renderChildren = () => {
    if (typeof children === 'function')  return children(isTriggered, close)

    return Children.only(cloneElement(children as any, { ...triggerProps, ...customTriggerProps }))
  }

  const renderContainer = () => {
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

  return (
    <>
      {renderChildren()}
      {renderLayer(renderContainer())}
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
