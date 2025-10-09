import type { TooltipProps } from './tooltip.interfaces.js'

import { Container }         from './container/index.js'

export const defaultTooltipProps: TooltipProps = {
  children: null,
  showArrow: true,
  trigger: 'click',
  arrowOptions: {
    angle: 30,
    size: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  mouseEnterDelay: 100,
  mouseLeaveDelay: 100,
  anchor: 'top-center',
  triggerOffset: 8,
  animate: false,
  closeOnOutsideClick: true,
  container: <Container />,
  text: 'Text',
}
