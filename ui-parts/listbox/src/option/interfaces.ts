import type { ComponentPropsWithRef } from 'react'

import type { OptionAppearances }     from './styles/appearance/interfaces.js'
import type { OptionShape }           from './styles/shape/interfaces.js'
export interface ListboxOption {
  value: string
  label: string
  disabled?: boolean
}
export interface OptionProps extends ComponentPropsWithRef<'li'> {
  shape: OptionShape
  appearance: OptionAppearances
  selected?: boolean
  highlighted: boolean
}
