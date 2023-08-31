import { BoxProps } from '@atls-ui-parts/layout'

export interface DividerProps extends Omit<BoxProps, 'height' | 'width'> {
  weight?: number | string | Array<number | string>
}
