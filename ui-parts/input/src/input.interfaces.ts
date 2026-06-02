import type { InputHTMLAttributes } from 'react'
import type { Ref }                 from 'react'
import type { JSX }                 from 'react'

import type { InputAppearance }     from './styles/index.js'
import type { InputShape }          from './styles/index.js'

type InputHTMLAttributesWithoutSize = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export interface InputProps extends InputHTMLAttributesWithoutSize {
  appearance?: InputAppearance
  icon?: JSX.Element
  ref?: Ref<HTMLInputElement>
  shape?: InputShape
}
