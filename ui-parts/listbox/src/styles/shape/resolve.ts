import type { CSSProperties }            from 'react'

import { FLOATING_MENU_HEIGHT_PROPERTY } from '@atls-utils/use-float'
export const resolveMaxHeight = (
  height: CSSProperties['maxHeight']
): CSSProperties['maxHeight'] => {
  const available = `var(${FLOATING_MENU_HEIGHT_PROPERTY}, 100dvh)`
  if (height === undefined || height === 'none') return available
  const limit = typeof height === 'number' ? `${height}px` : height
  return `min(${limit}, ${available})`
}
