import type { ReactNode }        from 'react'

import type { SearchInputProps } from './interfaces.js'

import { SearchIcon }            from '@atls-ui-parts/icons'

import { Input }                 from '../../component.js'

export const SearchInput = ({
  placeholder = 'Start typing',
  ...props
}: SearchInputProps): ReactNode => (
  <Input {...props} leadingAddon={<SearchIcon />} placeholder={placeholder} type='search' />
)
