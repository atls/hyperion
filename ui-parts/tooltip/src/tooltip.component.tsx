import React                 from 'react'
import { Children }          from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'
import { cloneElement }      from 'react'

import { Container }         from './container/index.js'
import { TooltipProps }      from './tooltip.interfaces.js'
import { useTooltip }        from './use-tooltip.hook.js'

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({ children, text, ...props }) => {
  const { isOpen, close, triggerProps, render } = useTooltip({ ...props })

  const renderChildren = () => {
    if (typeof children === 'function') return children(isOpen, close)

    return Children.only(cloneElement(children as any, triggerProps))
  }

  return (
    <>
      {renderChildren()}
      {render({ text })}
    </>
  )
}

Tooltip.defaultProps = {
  showArrow: true,
  trigger: 'click',
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
  container: <Container />,
  text: 'Text',
}
