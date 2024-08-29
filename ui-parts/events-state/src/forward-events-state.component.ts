import type { MutableRefObject }        from 'react'

import type { ForwardEventsStateProps } from './events-state.interfaces.js'

import { cloneElement }                 from 'react'
import { forwardRef }                   from 'react'
import { isValidElement }               from 'react'

import { useEventsState }               from './use-events-state.hook.js'

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
