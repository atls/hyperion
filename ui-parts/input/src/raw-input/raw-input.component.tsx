import type { ReactNode }     from 'react'

import type { RawInputInput } from './raw-input.interfaces.js'

import { clsx }               from 'clsx'

import { rawInputStyles }     from './raw-input.css.js'

export const RawInput = ({ className, ref, ...props }: RawInputInput): ReactNode => (
  <input ref={ref} className={clsx(className, rawInputStyles)} {...props} />
)
