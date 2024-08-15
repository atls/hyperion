import { BaseMenuSprinkles } from './menu/index.js'

export interface SelectProps extends BaseMenuSprinkles {
  label: string
  value: string
  onChangeValue: (nextValue: string) => void
  placeholder: string
  items: string[]
}
