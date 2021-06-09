import { DetailedHTMLProps }     from 'react'

import { AvatarShapeProps }      from './shape'
import { AvatarAppearanceProps } from './appearance'

export interface AvatarProps
  extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    AvatarShapeProps,
    AvatarAppearanceProps {}
