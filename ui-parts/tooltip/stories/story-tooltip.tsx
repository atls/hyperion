/* eslint-disable react/jsx-no-leaked-render */

import type { ReactElement }              from 'react'

import type { StoryTooltipProps }         from './interfaces.js'

import { Tooltip }                        from '@atls-ui-parts/tooltip'

import { storyContainerAppearanceStyles } from './styles.css.js'
import { storyContainerShapeStyles }      from './styles.css.js'
import { storyTriggerStyles }             from './styles.css.js'

const storyContainerClassName = [storyContainerAppearanceStyles, storyContainerShapeStyles].join(
  ' '
)

export const StoryTooltip = ({
  animated,
  arrow,
  customContainer,
  offset,
  placement,
  styledContainer,
  trigger,
}: StoryTooltipProps): ReactElement => (
  <Tooltip
    animated={animated}
    arrow={arrow && (customContainer || styledContainer) ? { fill: 'green' } : arrow}
    appearance={styledContainer ? { container: storyContainerAppearanceStyles } : undefined}
    offset={offset}
    placement={placement}
    shape={styledContainer ? { container: storyContainerShapeStyles } : undefined}
    trigger={trigger}
    text='Tooltip text'
    container={customContainer ? <div className={storyContainerClassName} /> : undefined}
  >
    <div className={storyTriggerStyles}>Trigger</div>
  </Tooltip>
)
