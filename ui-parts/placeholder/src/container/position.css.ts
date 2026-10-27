import { styleVariants } from '@vanilla-extract/css'

export const containerPositionStyles = {
  bottom: styleVariants({
    none: { gridTemplateAreas: '"icon"', justifyItems: 'center' },
    title: { gridTemplateAreas: '"icon" "title"', justifyItems: 'center' },
    description: { gridTemplateAreas: '"icon" "description"', justifyItems: 'center' },
    titleDescription: {
      gridTemplateAreas: '"icon" "title" "description"',
      justifyItems: 'center',
    },
  }),
  left: styleVariants({
    none: { gridTemplateAreas: '"icon"', justifyItems: 'center' },
    title: { gridTemplateAreas: '"title icon"', justifyItems: 'end' },
    description: { gridTemplateAreas: '"description icon"', justifyItems: 'end' },
    titleDescription: {
      alignContent: 'center',
      gridTemplateAreas: '"title icon" "description icon"',
      justifyItems: 'end',
    },
  }),
  right: styleVariants({
    none: { gridTemplateAreas: '"icon"', justifyItems: 'center' },
    title: { gridTemplateAreas: '"icon title"', justifyItems: 'start' },
    description: { gridTemplateAreas: '"icon description"', justifyItems: 'start' },
    titleDescription: {
      alignContent: 'center',
      gridTemplateAreas: '"icon title" "icon description"',
      justifyItems: 'start',
    },
  }),
  top: styleVariants({
    none: { gridTemplateAreas: '"icon"', justifyItems: 'center' },
    title: { gridTemplateAreas: '"title" "icon"', justifyItems: 'center' },
    description: { gridTemplateAreas: '"description" "icon"', justifyItems: 'center' },
    titleDescription: {
      gridTemplateAreas: '"title" "description" "icon"',
      justifyItems: 'center',
    },
  }),
} as const
