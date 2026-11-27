import type { InputFieldShape } from '../../field/styles/shape/interfaces.js'
export type InputElevationName = 'lg' | 'md' | 'sm' | 'xs'

export interface InputShape {
  field?: InputFieldShape
  className: string
  elevation: InputElevationName
}
