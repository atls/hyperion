export interface ValueType {
  [key: string]: any
  value: string
}

export interface AutocompleteProps {
  options: ValueType[]
  value: ValueType | null
  getOptionLabel?: (option: ValueType | null) => string
  onChange?: (value: ValueType | null) => void
  onInputChange?: (value: string) => void
}
