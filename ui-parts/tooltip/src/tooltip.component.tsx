import React                 from 'react'
import { AnimatePresence }   from 'framer-motion'
import { Children }          from 'react'
import { FunctionComponent } from 'react'
import { Arrow }             from 'react-laag'
import { ToggleLayer }       from 'react-laag'
import { cloneElement }      from 'react'
import { forwardRef }        from 'react'
import { useHover }          from 'react-laag'

import { Container }         from './container'
import { TooltipProps }      from './tooltip.interfaces'

const DefaultContainer = forwardRef((
  { text, showArrow, arrowStyle, layerSide, ...props }: any,
  ref
) => (
  <Container ref={ref} {...props}>
    {text}
    {showArrow && (
      <Arrow
        style={arrowStyle}
        layerSide={layerSide}
        backgroundColor='rgba(0, 0, 0, 0.75)'
        angle={30}
        size={8}
      />
    )}
  </Container>
))

export const Tooltip: FunctionComponent<TooltipProps> = ({
  text,
  trigger,
  showArrow,
  mouseEnterDelay,
  mouseLeaveDelay,
  anchor,
  possibleAnchors,
  triggerOffset,
  autoAdjust,
  fixed,
  scrollOffset,
  snapToAnchor,
  container,
  layerDimensions,
  closeOnOutsideClick,
  closeOnDisappear,
  isOpen,
  animate,
  children,
}) => {
  const [open, hoverProps] = useHover({
    delayEnter: mouseEnterDelay,
    delayLeave: mouseLeaveDelay,
  })

  const getTriggerProps = (toggle) => {
    if (typeof isOpen === 'boolean') {
      return {}
    }
    return (
      (trigger === 'hover' && hoverProps) ||
      (trigger === 'click' && { onClick: toggle }) ||
      (trigger === 'menu' && {
        onContextMenu: (event) => {
          event.preventDefault()
          toggle()
        },
      })
    )
  }

  return (
    <ToggleLayer
      renderLayer={({ layerProps, isOpen: isOpenLayer, arrowStyle, layerSide, close }) => {
        if (animate) {
          return (
            <AnimatePresence>
              {isOpenLayer &&
                // @ts-ignore
                cloneElement(container, {
                  ref: layerProps.ref,
                  style: layerProps.style,
                  close,
                  text,
                  showArrow,
                  arrowStyle,
                  layerSide,
                  animate,
                })}
            </AnimatePresence>
          )
        }
        return (
          isOpenLayer &&
          // @ts-ignore
          cloneElement(container, {
            ref: layerProps.ref,
            style: layerProps.style,
            close,
            text,
            showArrow,
            arrowStyle,
            layerSide,
            animate,
          })
        )
      }}
      placement={{
        anchor,
        possibleAnchors,
        triggerOffset,
        scrollOffset,
        snapToAnchor,
        autoAdjust,
        layerDimensions,
      }}
      closeOnOutsideClick={closeOnOutsideClick}
      closeOnDisappear={closeOnDisappear}
      fixed={fixed}
      isOpen={(typeof isOpen === 'boolean' && isOpen) || (trigger === 'hover' && open) || undefined}
    >
      {({ triggerRef, toggle }) =>
        Children.only(
          cloneElement(children, {
            ref: triggerRef,
            ...getTriggerProps(toggle),
          })
        )
      }
    </ToggleLayer>
  )
}

Tooltip.defaultProps = {
  trigger: 'hover',
  showArrow: false,
  mouseEnterDelay: 100,
  mouseLeaveDelay: 100,
  anchor: 'TOP_CENTER',
  triggerOffset: 8,
  autoAdjust: true,
  fixed: false,
  scrollOffset: 8,
  snapToAnchor: false,
  animate: false,
  closeOnOutsideClick: true,
  closeOnDisappear: 'full',
  container: <DefaultContainer />,
}
