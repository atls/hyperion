import { EventsState } from './events-state.interfaces'

export const mergeState = (prev: EventsState, event: string): EventsState => {
  if (event === 'focus') {
    return {
      ...prev,
      focus: true,
      blur: false,
    }
  }

  if (event === 'blur') {
    return {
      ...prev,
      blur: true,
      focus: false,
    }
  }

  return {
    ...prev,
    [event]: true,
  }
}

export const fillOppositeEvents = (events: string[]): string[] => {
  const oppositeEvents: string[] = []

  if (events.includes('blur') && !events.includes('focus')) {
    oppositeEvents.push('focus')
  }

  if (events.includes('focus') && !events.includes('blur')) {
    oppositeEvents.push('blur')
  }

  if (oppositeEvents.length > 0) {
    return [...events, ...oppositeEvents]
  }

  return events
}
