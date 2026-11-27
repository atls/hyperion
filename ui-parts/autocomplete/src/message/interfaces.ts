import type { OptionAppearance }      from '@atls-ui-parts/listbox'
import type { OptionShape }           from '@atls-ui-parts/listbox'
import type { ComponentPropsWithRef } from 'react'

export interface MessageProps extends ComponentPropsWithRef<'li'> {
  shape: OptionShape
  appearance: OptionAppearance
}
