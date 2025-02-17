/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { FC }                 from 'react'

import type { TextTransformProps } from './text-transform.interfaces.js'

export const TextTransform: FC<TextTransformProps> = ({
  children,
  ...props
}: TextTransformProps) => {
  try {
    const transformed = Object.keys(props).reduce((result, key) => {
      const args = props[key as keyof typeof props]

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
          // @ts-expect-error correct args
          return Array.isArray(args) ? result.slice(args[0], args[1]) : result.slice(args)
        case 'replace':
          // @ts-expect-error correct args
          return result.replace(args[0], args[1])
        case 'hideAfter':
          // @ts-expect-error correct args
          return `${result.slice(0, args)}...`
        default:
          return result
      }
    }, children)

    return transformed
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      throw error
    }

    return children
  }
}
