export interface ValueType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  value: string
}

export interface AutocompleteProps {
  options: Array<ValueType>
  value: ValueType | null
  getOptionLabel?: (option: ValueType | null) => string
  onChange?: (value: ValueType | null) => void
  onInputChange?: (value: string) => void
}
