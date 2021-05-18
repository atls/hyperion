import { cloneElement }            from 'react'
import { forwardRef }              from 'react'
import { MutableRefObject }        from 'react'
import { isValidElement }          from 'react'

import { useEventsState }          from './use-events-state.hook'
import { ForwardEventsStateProps } from './events-state.interfaces'

export const ForwardEventsState = forwardRef<HTMLElement, ForwardEventsStateProps>(
  ({ events, children }, ref) => {
    const state = useEventsState(ref as MutableRefObject<HTMLElement>, events)

    if (isValidElement(children)) {
      return cloneElement(children, state)
    }

    return children
  }
)
