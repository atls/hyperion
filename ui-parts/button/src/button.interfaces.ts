import { ButtonHTMLAttributes }  from 'react'

import { ButtonAppearanceProps } from './appearance'
import { ButtonShapeProps }      from './shape'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonAppearanceProps,
    ButtonShapeProps {}
