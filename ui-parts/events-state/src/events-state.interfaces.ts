import type { ReactElement } from 'react'
import type { Ref }          from 'react'

export type EventsState = Record<string, boolean>

export interface ForwardEventsStateProps {
  children: ReactElement
  events: Array<string>
  ref?: Ref<HTMLElement>
}
