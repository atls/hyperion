import type { ComponentPropsWithRef } from 'react'

import type { ListboxAppearance }     from './styles/appearance/interfaces.js'
import type { ListboxShape }          from './styles/shape/interfaces.js'
import type { listboxAppearances }    from './styles/appearance/variants.js'

export interface ListboxProps extends ComponentPropsWithRef<'ul'> {
  shape?: ListboxShape
  appearance?: ListboxAppearance | keyof typeof listboxAppearances
}
