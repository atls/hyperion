import { ReactElement }       from 'react'

import { TextTransformProps } from './text-transform.interfaces.js'

export const TextTransform = ({
  children,
  ...props
}: TextTransformProps): ReactElement<any, any> => {
  try {
    const transformed = Object.keys(props).reduce((result, key) => {
      // @ts-expect-error index type
      const args = props[key]

      switch (key) {
        case 'lowerCase':
          return result.toLowerCase()
        case 'upperCase':
          return result.toUpperCase()
        case 'firstLetter':
          return result.slice(0, 1)
        case 'lastLetter':
          return result.slice(-1)
        case 'substr':
          return Array.isArray(args) ? result.slice(args[0], args[1]) : result.slice(args)
        case 'replace':
          return result.replace(args[0], args[1])
        case 'hideAfter':
          return `${result.slice(0, args)}...`
        default:
          return result
      }
    }, children)

    return transformed as any as ReactElement
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      throw error
    }

    return children as any
  }
}
