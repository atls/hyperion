import type { PaginationStateProps } from './interfaces.js'

import { useState }                  from 'react'

import { FIRST_PAGE }                from './constants.js'

export const usePagination = ({
  count,
  value,
  defaultValue = FIRST_PAGE,
  onChange,
}: PaginationStateProps) => {
  const [localValue, setLocalValue] = useState(defaultValue)
  const current = Math.min(count, Math.max(FIRST_PAGE, value ?? localValue))
  const [transition, setTransition] = useState({ from: current, to: current })

  if (!Object.is(transition.to, current)) {
    setTransition({ from: transition.to, to: current })
  }

  const select = (page: number): void => {
    if (page === current) return
    if (value === undefined) setLocalValue(page)
    onChange?.(page)
  }

  return { current, transition, select }
}
