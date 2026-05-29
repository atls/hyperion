import type { ButtonHTMLAttributes } from 'react'
import type { Ref }                  from 'react'
import type { JSX }                  from 'react'

import type { ButtonAppearance }     from './styles/interfaces.js'
import type { ButtonShape }          from './styles/interfaces.js'

export enum IconPlacement {
  LEFT = 'Left',
  RIGHT = 'Right',
}

type NativeButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

export interface ButtonProps extends NativeButtonProps {
  appearance?: ButtonAppearance
  icon?: JSX.Element
  iconPlacement?: IconPlacement
  ref?: Ref<HTMLButtonElement>
  shape?: ButtonShape
}
