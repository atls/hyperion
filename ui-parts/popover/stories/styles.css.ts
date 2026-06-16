import { style }                      from '@vanilla-extract/css'

import { vars }                       from '@atls-ui-parts/theme'

import { STORY_CONTAINER_MIN_HEIGHT } from './constants.js'
import { STORY_CONTAINER_MIN_WIDTH }  from './constants.js'
import { STORY_CONTAINER_Z_INDEX }    from './constants.js'
import { STORY_TRIGGER_HEIGHT }       from './constants.js'

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

export const storyContainerAppearanceStyles = style({
  backgroundColor: vars.colors.white,
  boxShadow: vars.shadows.gordonsgreen,
})

export const storyContainerShapeStyles = style({
  display: 'flex',
  flexDirection: 'column',
  minWidth: STORY_CONTAINER_MIN_WIDTH,
  minHeight: STORY_CONTAINER_MIN_HEIGHT,
  padding: vars.space.g10,
  margin: 0,
  borderRadius: vars.radii.f8,
  zIndex: STORY_CONTAINER_Z_INDEX,
})

export const storyContainerCloseStyles = style({
  cursor: 'pointer',
  color: vars.colors.blueProtective,
})
