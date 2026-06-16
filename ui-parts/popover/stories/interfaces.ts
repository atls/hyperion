import type { PopoverProps }          from '@atls-ui-parts/popover'

import type { PopoverAppearanceName } from '../src/styles/index.js'
import type { PopoverShapeName }      from '../src/styles/index.js'

export interface StoryPopoverProps
  extends Pick<PopoverProps, 'animated' | 'arrow' | 'offset' | 'placement' | 'trigger'> {
  appearance: PopoverAppearanceName
  shape: PopoverShapeName
}
