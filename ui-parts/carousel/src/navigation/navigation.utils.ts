import type { CreateAttachStylesResult } from './navigation.interfaces.js'
import type { CreateFillStylesResult }   from './navigation.interfaces.js'
import type { NavigationAttachType }     from './navigation.interfaces.js'

export const createFillStyles = (fill: boolean, height: string): CreateFillStylesResult =>
  fill ? { top: 0, height: '100%' } : { top: '50%', marginTop: parseFloat(height) / 2, height }

export const createAttachStyles = (
  attach: NavigationAttachType,
  offset?: number | string
): CreateAttachStylesResult => (attach === 'prev' ? { left: offset || 0 } : { right: offset || 0 })
