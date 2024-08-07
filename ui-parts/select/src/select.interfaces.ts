export interface SelectProps {
  label: string
  value: string
  onChangeValue: (nextValue: string) => void
  placeholder: string
  items: string[]
}
