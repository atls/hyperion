import { styleFn } from 'styled-system'

export const execAndSerialize = (target: styleFn): styleFn =>
  (props) => {
    const result = {}

    const current = target(props) || {}

    Object.keys(current).forEach((key) => {
      result[key] = typeof current[key] === 'function' ? current[key](props) : current[key]
    })

    return result
  }
