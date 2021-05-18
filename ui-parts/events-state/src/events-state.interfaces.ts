import { ReactElement } from 'react'

export interface EventsState {
  [key: string]: boolean
}

export interface ForwardEventsStateProps {
  children: ReactElement<any>
  events: string[]
}
