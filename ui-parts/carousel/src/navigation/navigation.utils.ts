import { NavigationAttachType } from './navigation.interfaces.js'

export const createFillStyles = (fill: boolean, height: string) =>
  fill ? { top: 0, height: '100%' } : { top: '50%', marginTop: parseFloat(height) / 2, height }

export const createAttachStyles = (attach: NavigationAttachType, offset?: number | string) =>
  attach === 'prev' ? { left: offset || 0 } : { right: offset || 0 }
