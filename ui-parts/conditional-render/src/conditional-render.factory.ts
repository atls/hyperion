import { createElement } from 'react'

export type ConditionFunction = (props: any) => boolean
export type Condition = ConditionFunction | string

export const ConditionalRender = (tag: string = 'div', condition: Condition = 'children') => {
  if (typeof condition === 'function') {
    // eslint-disable-next-line
    // @ts-expect-error any
    return (props) => {
      if (!condition(props)) return null

      return createElement(tag, props)
    }
  }

  // eslint-disable-next-line
  // @ts-expect-error any
  return (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    if (!props[condition]) return null

    return createElement(tag, props)
  }
}
