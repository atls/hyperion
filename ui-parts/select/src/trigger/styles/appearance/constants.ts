import type { TriggerShape } from '../shape/interfaces.js'

export const HOVER_ELEVATION_SIZES: Record<
  TriggerShape['elevationSize'],
  TriggerShape['elevationSize']
> = {
  xs: 'xs',
  sm: 'md',
  md: 'sm',
  lg: 'lg',
}

export const FOCUSED_ELEVATION_SIZES: Record<
  TriggerShape['elevationSize'],
  TriggerShape['elevationSize']
> = {
  xs: 'xs',
  sm: 'sm',
  md: 'sm',
  lg: 'lg',
}
