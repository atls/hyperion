import type { FC }        from 'react'
import type { ReactNode } from 'react'

import { Children }       from 'react'
import { createElement }  from 'react'

const combineChildren = (children: ReactNode): Array<ReactNode> => {
  let isPrevChildPure: boolean = false

  const childList: Array<ReactNode> = []

  Children.forEach(children, (child) => {
    const isCurrentChildPure = typeof child === 'string' || typeof child === 'number'

    if (isPrevChildPure && isCurrentChildPure) {
      const lastIndex = childList.length - 1
      const lastChild = childList[lastIndex]

      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      childList[lastIndex] = [lastChild, child].join(' ')
    } else {
      childList.push(child)
    }

    isPrevChildPure = isCurrentChildPure
  })

  return childList
}

export const useDividedChildren = (
  children: ReactNode,
  Wrapper: FC,
  props = {}
): Array<ReactNode> | ReactNode => {
  if (Children.count(children) > 1) {
    const combinedChildren = combineChildren(children)

    return Children.map(combinedChildren, async (child, index) => {
      if (index > 0) {
        return createElement(Wrapper, props, child)
      }

      return child
    })
  }

  return children
}
