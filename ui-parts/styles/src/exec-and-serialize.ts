import { styleFn } from 'styled-system'

export const execAndSerialize = (target: styleFn): styleFn =>
  (props) => {
    const current = target(props) || {}
    const result = {}

    Object.keys(current).forEach((key) => {
      result[key] = typeof current[key] === 'function' ? current[key](props) : current[key]
    })

    return result
  }
