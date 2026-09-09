import type { InputProps } from '../../interfaces.js'

export type SearchInputProps = Omit<InputProps, 'leadingAddon' | 'type'>
