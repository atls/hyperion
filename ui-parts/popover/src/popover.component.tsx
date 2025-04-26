import type { ReactNode }         from 'react'
import type { PropsWithChildren } from 'react'

import type { PopoverProps }      from './popover.interfaces.js'

import { Children }               from 'react'
import { cloneElement }           from 'react'
import React                      from 'react'

import { usePopover }             from './use-popover.hook.js'

export const Popover = ({
  title,
  content,
  children,
  animate = true,
  triggerOffset = 15,
  showArrow = true,
  ...props
}: PropsWithChildren<PopoverProps>): ReactNode => {
  const { isOpen, close, triggerProps, render } = usePopover({
    animate,
    triggerOffset,
    showArrow,
    ...props,
  })

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
