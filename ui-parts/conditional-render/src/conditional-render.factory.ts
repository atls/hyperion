import { createElement } from 'react'

export type ConditionFunction = (props: any) => boolean
export type Condition = string | ConditionFunction

export const ConditionalRender = (tag: string = 'div', condition: Condition = 'children') => {
  if (typeof condition === 'function') {
    return (props) => {
      if (!condition(props)) {
        return null
      }

      return createElement(tag, props)
    }
  }

  return (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    if (!props[condition]) {
      return null
    }

    return createElement(tag, props)
  }
}
