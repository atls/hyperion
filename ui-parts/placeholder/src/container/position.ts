import type { PlaceholderTextPosition } from '../placeholder.interfaces.js'

import { containerPositionStyles }      from './position.css.js'

type PlaceholderContent = 'description' | 'none' | 'title' | 'titleDescription'

const contentKey = (hasTitle: boolean, hasDescription: boolean): PlaceholderContent => {
  if (hasTitle && hasDescription) {
    return 'titleDescription'
  }

  if (hasTitle) {
    return 'title'
  }

  return hasDescription ? 'description' : 'none'
}

export const getContainerPositionStyles = (
  textPosition: PlaceholderTextPosition,
  hasTitle: boolean,
  hasDescription: boolean
): string => containerPositionStyles[textPosition][contentKey(hasTitle, hasDescription)]
