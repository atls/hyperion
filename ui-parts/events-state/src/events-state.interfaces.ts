import type { ReactElement } from 'react'

export type EventsState = Record<string, boolean>

export interface ForwardEventsStateProps {
  children: ReactElement
  events: Array<string>
}
