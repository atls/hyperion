import React                 from 'react'
import { FunctionComponent } from 'react'

import { Tooltip }           from '@atls-ui-parts/tooltip'

import { Container }         from './container'
import { PopoverProps }      from './popover.interfaces'

const Popover: FunctionComponent<PopoverProps> = ({ title, content, children, ...props }) => (
  <Tooltip container={<Container content={content} title={title} />} {...props}>
    {children}
  </Tooltip>
)

Popover.defaultProps = {
  triggerOffset: 15,
  animate: true,
  showArrow: true,
}

export { Popover }
