import { BoxProps } from '@atls-ui-parts/layout'

export interface DividerProps extends Omit<BoxProps, 'height' | 'width'> {
  weight?: string | number | Array<number | string>
}
