import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import type { TooltipProps }      from './tooltip.interfaces.js'

import { Children }               from 'react'
import { cloneElement }           from 'react'
import React                      from 'react'

import { Container }              from './container/index.js'
import { useTooltip }             from './use-tooltip.hook.js'

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({ children, text, ...props }) => {
  const { isOpen, close, triggerProps, render } = useTooltip({ ...props })

  if (typeof children === 'function')
    return (
      <>
        {children(isOpen, close)}
        {render({ text })}
      </>
    )

  return (
    <>
      {Children.only(cloneElement(children as never, triggerProps))}
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
