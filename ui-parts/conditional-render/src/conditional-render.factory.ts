import type { ReactNode } from 'react'

import { createElement }  from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ConditionFunction = (props: any) => boolean
export type Condition = ConditionFunction | string

export const ConditionalRender = (
  tag: string = 'div',
  condition: Condition = 'children'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): ((props: any) => ReactNode) => {
  if (typeof condition === 'function') {
    return (props): ReactNode => {
      if (!condition(props)) return null

      return createElement(tag, props)
    }
  }

  return (props): ReactNode => {
    // eslint-disable-next-line react/destructuring-assignment
    if (!props[condition]) return null

    return createElement(tag, props)
  }
}
