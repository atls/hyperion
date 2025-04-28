import type { ReactNode }      from 'react'

import type { TooltipProps }   from './tooltip.interfaces.js'

import { Children }            from 'react'
import { cloneElement }        from 'react'
import React                   from 'react'

import { defaultTooltipProps } from './tooltip.constants.js'
import { useTooltip }          from './use-tooltip.hook.js'

export const Tooltip = ({ children, text, ...props }: TooltipProps): ReactNode => {
  const { isOpen, close, triggerProps, render } = useTooltip({ ...defaultTooltipProps, ...props })

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
