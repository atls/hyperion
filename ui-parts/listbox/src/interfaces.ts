import type { ReactNode }             from 'react'
import type { ComponentPropsWithRef } from 'react'

import type { ListboxAppearance }     from './styles/appearance/interfaces.js'
import type { ListboxShape }          from './styles/shape/interfaces.js'
export interface ListboxProps extends ComponentPropsWithRef<'ul'> {
  status?: ReactNode
  shape: ListboxShape
  appearance: ListboxAppearance
}
