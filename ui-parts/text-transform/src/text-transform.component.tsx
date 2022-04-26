import { FC }                 from 'react'
import { ReactElement }       from 'react'

import { TextTransformProps } from './text-transform.interfaces'

export const TextTransform: FC<TextTransformProps> = ({ children, ...props }) => {
  try {
    const transformed = Object.keys(props).reduce((result, key) => {
      const args = props[key]

      switch (key) {
        case 'upperCase':
          return result.toUpperCase()
        case 'lowerCase':
          return result.toLowerCase()
        case 'firstLetter':
          return result.substr(0, 1)
        case 'lastLetter':
          return result.substr(-1)
        case 'substr':
          return Array.isArray(args) ? result.substr(args[0], args[1]) : result.substr(args)
        case 'replace':
          return result.replace(args[0], args[1])
        default:
          return result
      }
    }, children)

    return transformed
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      throw error
    }

    return children as ReactElement
  }
}
