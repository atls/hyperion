import type { UseFloatReturn } from './interfaces.js'
import type { UseFloatProps }  from './interfaces.js'

import { useFloating }         from '@floating-ui/react'
import { autoUpdate }          from '@floating-ui/react'
import { offset }              from '@floating-ui/react'
import { flip }                from '@floating-ui/react'
import { shift }               from '@floating-ui/react'
import { useClick }            from '@floating-ui/react'
import { useFocus }            from '@floating-ui/react'
import { useDismiss }          from '@floating-ui/react'
import { useRole }             from '@floating-ui/react'
import { useHover }            from '@floating-ui/react'
import { useInteractions }     from '@floating-ui/react'
import { arrow }               from '@floating-ui/react'
import { useRef }              from 'react'
import { useState }            from 'react'

export const useFloat = ({
  open,
  onOpenChange,
  strategy = 'absolute',
  transform = true,
  placement = 'top',
  offset: offsetProps = 10,
  trigger = 'click',
  triggerOnFocus = true,
  mouseEnterDelay = 100,
  mouseLeaveDelay = 100,
  role = 'dialog',
  dismiss,
}: UseFloatProps): UseFloatReturn => {
  const [isOpen, setIsOpen] = useState(false)

  const arrowRef = useRef<SVGSVGElement>(null)

  const { refs, floatingStyles, context, ...floatingProps } = useFloating({
    open: open ?? isOpen,
    onOpenChange: onOpenChange ?? setIsOpen,
    placement,
    strategy,
    transform,
    whileElementsMounted: autoUpdate,
    middleware: [
      shift(),
      offset(offsetProps),
      flip({ fallbackAxisSideDirection: 'start' }),
      arrow({ element: arrowRef }),
    ],
  })

  const clickInteraction = useClick(context, { enabled: trigger === 'click' })
  const hoverInteraction = useHover(context, {
    enabled: trigger === 'hover',
    delay: mouseEnterDelay,
    restMs: mouseLeaveDelay,
  })
  const focusInteraction = useFocus(context, { enabled: triggerOnFocus })
  const dismissInteraction = useDismiss(context, dismiss)
  const roleInteraction = useRole(context, { role })

  const { getReferenceProps, getFloatingProps } = useInteractions([
    clickInteraction,
    hoverInteraction,
    focusInteraction,
    dismissInteraction,
    roleInteraction,
  ])

  return {
    isOpen: open ?? isOpen,
    refs,
    arrowRef,
    floatingStyles,
    context,
    getReferenceProps,
    getFloatingProps,
    ...floatingProps,
  }
}
