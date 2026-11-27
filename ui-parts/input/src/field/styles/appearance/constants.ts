import type { InputFieldShape } from '../shape/interfaces.js'

export const HOVER_ELEVATION_SIZES: Record<
  InputFieldShape['elevationSize'],
  InputFieldShape['elevationSize']
> = {
  xs: 'xs',
  sm: 'md',
  md: 'sm',
  lg: 'lg',
}

export const FOCUSED_ELEVATION_SIZES: Record<
  InputFieldShape['elevationSize'],
  InputFieldShape['elevationSize']
> = {
  xs: 'xs',
  sm: 'sm',
  md: 'sm',
  lg: 'lg',
}
