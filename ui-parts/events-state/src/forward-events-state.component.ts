import { MutableRefObject }        from 'react'
import { cloneElement }            from 'react'
import { forwardRef }              from 'react'
import { isValidElement }          from 'react'

import { ForwardEventsStateProps } from './events-state.interfaces.js'
import { useEventsState }          from './use-events-state.hook.js'

export const ForwardEventsState = forwardRef<HTMLElement, ForwardEventsStateProps>((
  { events, children },
  ref
) => {
  const state = useEventsState(ref as MutableRefObject<HTMLElement>, events)

  if (isValidElement(children)) {
    return cloneElement(children, state)
  }

  return children
})
