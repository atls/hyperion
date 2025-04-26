import type { RefObject }     from 'react'

import type { EventsState }   from './events-state.interfaces.js'

import { useEffect }          from 'react'
import { useState }           from 'react'

import { fillOppositeEvents } from './events-state.utils.js'
import { mergeState }         from './events-state.utils.js'

export const useEventsState = (
  ref: RefObject<HTMLElement>,
  originalEvents: Array<string> = []
): EventsState => {
  const events = fillOppositeEvents(originalEvents)

  const [state, setState] = useState<EventsState>(() =>
    events.reduce(
      (result, event) => ({
        ...result,
        [event]: false,
      }),
      {}
    ))

  useEffect(() => {
    const node = ref?.current

    const callbacks = events.reduce<Record<string, () => void>>(
      (result, event) => ({
        ...result,
        [event]: (): void => {
          setState((prev) => mergeState(prev, event))
        },
      }),
      {}
    )

    if (node) {
      Object.keys(callbacks).forEach((event) => {
        node.addEventListener(event, callbacks[event])
      })
    }

    return (): void => {
      if (node) {
        Object.keys(callbacks).forEach((event) => {
          node.removeEventListener(event, callbacks[event])
        })
      }
    }
  }, [ref, events])

  return state
}
