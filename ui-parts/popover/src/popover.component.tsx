import { Children }          from 'react'
import { PropsWithChildren } from 'react'
import { FC }                from 'react'
import { cloneElement }      from 'react'
import React                 from 'react'

import { PopoverProps }      from './popover.interfaces.js'
import { usePopover }        from './use-popover.hook.js'

export const Popover: FC<PropsWithChildren<PopoverProps>> = ({
  title,
  content,
  children,
  ...props
}) => {
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
  animate: true,
  triggerOffset: 15,
  showArrow: true,
}
