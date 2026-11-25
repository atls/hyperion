import type { CSSProperties }   from 'react'

import type { ListboxBoxShape } from '../../box/styles/shape/interfaces.js'
export interface ListboxShape extends ListboxBoxShape {
  statusWidth?: CSSProperties['width']
  width: CSSProperties['width']
  maxHeight: CSSProperties['maxHeight']
}
