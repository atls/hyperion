import { UseSelectProps as UseDownshiftSelectProps } from 'downshift'

export interface UseSelectProps extends UseDownshiftSelectProps<string> {
  onChange?: (nextValue: string) => void | any
}
