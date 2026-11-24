import type { ComponentPropsWithRef } from 'react'

import type { TriggerAppearances }    from './styles/appearance/interfaces.js'
import type { TriggerShape }          from './styles/shape/interfaces.js'
export interface TriggerProps extends ComponentPropsWithRef<'button'> {
  shape: TriggerShape
  appearance: TriggerAppearances
}
