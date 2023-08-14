import React            from 'react'
import { FC }           from 'react'

import { Tooltip }      from '@atls-ui-parts/tooltip'

import { Container }    from './container'
import { PopoverProps } from './popover.interfaces'

const Popover: FC<PopoverProps> = ({ title, content, children, ...props }) => (
  <Tooltip trigger='click' container={<Container content={content} title={title} />} {...props}>
    {children}
  </Tooltip>
)

Popover.defaultProps = {
  triggerOffset: 15,
  animate: true,
  showArrow: true,
}

export { Popover }
