import type { UseFloatProps }                             from '@atls-utils/use-float'
import type { UseSelectProps as UseDownshiftSelectProps } from 'downshift'

export interface UseSelectProps extends UseDownshiftSelectProps<string> {
  onChange?: (nextValue: string) => void
  placement?: UseFloatProps['placement']
}
