import { styleFn }                 from 'styled-system'
import { ifProp }                  from 'styled-tools'

import { ButtonContentAlignProps } from './content.interfaces'

export const createContentStyles: styleFn = () =>
  ifProp('contentAlign', ({ contentAlign }: ButtonContentAlignProps) => ({
    justifyContent: contentAlign,
  }))
