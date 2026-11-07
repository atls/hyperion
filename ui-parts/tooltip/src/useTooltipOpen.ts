import type { UseFloatProps }  from '@atls-utils/use-float'

import type { TooltipTrigger } from './interfaces.js'

import { useCallback }         from 'react'
import { useEffect }           from 'react'
import { useRef }              from 'react'
import { useState }            from 'react'

type OpenChangeHandler = NonNullable<UseFloatProps['onOpenChange']>

export const useTooltipOpen = (
  controlledOpen: boolean | undefined,
  onOpenChange: UseFloatProps['onOpenChange'],
  trigger: TooltipTrigger,
  pressOpenDuration: number
) => {
  const [localOpen, setLocalOpen] = useState(false)
  const pressTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const handleOpenChange: OpenChangeHandler = useCallback(
    (nextOpen, event, reason) => {
      clearTimeout(pressTimer.current)
      if (controlledOpen === undefined) {
        setLocalOpen(nextOpen)
      }
      onOpenChange?.(nextOpen, event, reason)

      if (trigger === 'pressed' && nextOpen && reason === 'click') {
        pressTimer.current = setTimeout(() => {
          if (controlledOpen === undefined) {
            setLocalOpen(false)
          }
          onOpenChange?.(false)
        }, pressOpenDuration)
      }
    },
    [controlledOpen, onOpenChange, trigger, pressOpenDuration]
  )

  useEffect(
    () => () => {
      clearTimeout(pressTimer.current)
    },
    []
  )

  return {
    open: controlledOpen ?? localOpen,
    onOpenChange: handleOpenChange,
  }
}
