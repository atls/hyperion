import type { ReactNode }  from 'react'

import type { InputProps } from '../interfaces.js'

import { SearchIcon }      from '@atls-ui-parts/icons'

import { Input }           from '../component.js'

export type SearchInputProps = Omit<InputProps, 'leadingAddon' | 'type'>

export const SearchInput = ({
  placeholder = 'Start typing',
  ...props
}: SearchInputProps): ReactNode => (
  <Input {...props} leadingAddon={<SearchIcon />} placeholder={placeholder} type='search' />
)
