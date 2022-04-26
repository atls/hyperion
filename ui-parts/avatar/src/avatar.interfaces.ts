import { DetailedHTMLProps }     from 'react'

import { AvatarAppearanceProps } from './appearance'
import { AvatarShapeProps }      from './shape'

export interface AvatarProps
  extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    AvatarShapeProps,
    AvatarAppearanceProps {}
