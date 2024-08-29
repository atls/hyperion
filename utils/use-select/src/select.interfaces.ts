import type { UseSelectProps as UseDownshiftSelectProps } from 'downshift'
import type { PlacementType }                             from 'react-laag/dist/PlacementType.js'

export interface UseSelectProps extends UseDownshiftSelectProps<string> {
  onChange?: (nextValue: string) => void
  placement?: PlacementType
}
