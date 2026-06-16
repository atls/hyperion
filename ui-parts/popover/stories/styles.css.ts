import { style }                from '@vanilla-extract/css'

import { vars }                 from '@atls-ui-parts/theme'

import { STORY_TRIGGER_HEIGHT } from './constants.js'

export const storyTriggerStyles = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: STORY_TRIGGER_HEIGHT,
  padding: `${vars.space.zero} ${vars.space.g16}`,
  color: vars.colors.blackThreeQuarters,
  backgroundColor: vars.colors.white,
  border: vars.borders.normalMediumGray,
  cursor: 'pointer',
})
