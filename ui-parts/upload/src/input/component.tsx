import type { ReactNode }  from 'react'

import type { InputProps } from './interfaces.js'

import { inputStyles }     from './styles.css.js'
export const Input = ({ className, ...props }: InputProps): ReactNode => (
  <input
    {...props}
    className={[inputStyles, className].filter(Boolean).join(' ')}
    type='file'
    aria-hidden='true'
  />
)
