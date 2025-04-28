import type { HTMLAttributes }      from 'react'
import type { Ref }                 from 'react'

import type { AttachmentSprinkles } from './attachment.css.js'

export interface AttachmentProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    Omit<AttachmentSprinkles, 'paddingLeft' | 'paddingRight'> {
  type: 'prefix' | 'suffix'
  offsetLeft: string
  offsetRight: string
  ref?: Ref<HTMLDivElement>
}
