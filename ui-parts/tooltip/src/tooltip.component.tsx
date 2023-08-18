import React                 from 'react'
import { Children }          from 'react'
import { cloneElement }      from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'

import { DefaultContainer }  from './container'
import { TooltipProps }      from './tooltip.interfaces'
import { useTooltip }        from './use-tooltip.hook'

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  text = 'Text',
  children,
  ...props
}) => {
  const { isOpen, triggerProps, render } = useTooltip({ ...props })

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
