import type { TooltipProps } from '@atls-ui-parts/tooltip'

export interface StoryTooltipProps
  extends Pick<TooltipProps, 'animated' | 'arrow' | 'offset' | 'placement' | 'trigger'> {
  customContainer: boolean
}
