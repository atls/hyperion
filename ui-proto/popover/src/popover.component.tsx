import React, { FunctionComponent } from 'react'

import { Tooltip }                  from '@atls-ui-parts/tooltip'

import { Container }                from './container'
import { TooltipProps }             from './popover.interfaces'

const Popover: FunctionComponent<TooltipProps> = ({ title, content, children, ...props }) => (
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
