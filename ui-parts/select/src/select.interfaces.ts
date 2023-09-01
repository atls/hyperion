import { UseSelectProps as UseDownshiftSelectProps } from 'downshift'
import { PlacementType }                             from 'react-laag/dist/PlacementType'

export interface UseSelectProps extends UseDownshiftSelectProps<string> {
  placement?: PlacementType
  onChange?: (nextValue: string) => void | any
}
