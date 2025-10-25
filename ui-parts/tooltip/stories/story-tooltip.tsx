/* eslint-disable react/jsx-no-leaked-render */

import type { ReactElement }      from 'react'

import type { StoryTooltipProps } from './interfaces.js'

import { Tooltip }                from '@atls-ui-parts/tooltip'

import { storyTriggerStyles }     from './styles.css.js'
import { storyContainerStyles }   from './styles.css.js'

export const StoryTooltip = ({
  animated,
  arrow,
  customContainer,
  offset,
  placement,
  trigger,
}: StoryTooltipProps): ReactElement => (
  <Tooltip
    animated={animated}
    arrow={arrow && customContainer ? { fill: 'green' } : arrow}
    offset={offset}
    placement={placement}
    trigger={trigger}
    text='Tooltip text'
    container={customContainer ? <div className={storyContainerStyles} /> : undefined}
  >
    <div className={storyTriggerStyles}>Trigger</div>
  </Tooltip>
)
