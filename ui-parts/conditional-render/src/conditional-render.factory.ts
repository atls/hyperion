import type { DOMElement } from 'react'

import { createElement }   from 'react'

export type ConditionFunction = (props: any) => boolean
export type Condition = ConditionFunction | string

export const ConditionalRender = (
  tag: string = 'div',
  condition: Condition = 'children'
): ((props: any) => DOMElement<any, Element> | null) => {
  if (typeof condition === 'function') {
    return (props): DOMElement<any, Element> | null => {
      if (!condition(props)) return null

      return createElement(tag, props)
    }
  }

  return (props): DOMElement<any, Element> | null => {
    // eslint-disable-next-line react/destructuring-assignment
    if (!props[condition]) return null

    return createElement(tag, props)
  }
}
