import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import type { PopoverProps }      from './popover.interfaces.js'

import { Children }               from 'react'
import { cloneElement }           from 'react'
import React                      from 'react'

import { usePopover }             from './use-popover.hook.js'

export const Popover: FC<PropsWithChildren<PopoverProps>> = ({
  title,
  content,
  children,
  ...props
}) => {
  const { isOpen, close, triggerProps, render } = usePopover({ ...props })

  if (typeof children === 'function')
    return (
      <>
        {children(isOpen, close)}
        {render({ title, content })}
      </>
    )

  return (
    <>
      {Children.only(cloneElement(children as never, triggerProps))}
      {render({ title, content })}
    </>
  )
}

Popover.defaultProps = {
  animate: true,
  triggerOffset: 15,
  showArrow: true,
}
