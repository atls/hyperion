import React                 from 'react'
import { Children }          from 'react'
import { PropsWithChildren } from 'react'
import { FC }                from 'react'
import { cloneElement }      from 'react'

import { PopoverProps }      from './popover.interfaces'
import { usePopover }        from './use-popover.hook'

const Popover: FC<PropsWithChildren<PopoverProps>> = ({ title, content, children, ...props }) => {
  const { isOpen, close, triggerProps, render } = usePopover({ ...props })

  const renderChildren = () => {
    if (typeof children === 'function') return children(isOpen, close)

    return Children.only(cloneElement(children as any, triggerProps))
  }

  return (
    <>
      {renderChildren()}
      {render({ title, content })}
    </>
  )
}

Popover.defaultProps = {
  triggerOffset: 15,
  animate: true,
  showArrow: true,
}

export { Popover }
