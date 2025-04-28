import type { ReactNode }               from 'react'
import type { RefObject }               from 'react'

import type { ForwardEventsStateProps } from './events-state.interfaces.js'

import { cloneElement }                 from 'react'
import { isValidElement }               from 'react'

import { useEventsState }               from './use-events-state.hook.js'

export const ForwardEventsState = ({
  events,
  children,
  ref,
}: ForwardEventsStateProps): ReactNode => {
  const state = useEventsState(ref as RefObject<HTMLElement>, events)

  if (isValidElement(children)) {
    return cloneElement(children, state)
  }

  return children
}
