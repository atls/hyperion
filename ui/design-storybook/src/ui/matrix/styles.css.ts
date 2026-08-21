import { style }              from '@vanilla-extract/css'

import { vars }               from '@atls-ui-parts/theme'

import { matrixCellMinWidth } from './constants.js'

export const matrixStyles = {
  root: style({
    display: 'grid',
    gap: vars.space.g24,
    padding: vars.space.g24,
  }),
  title: style({
    fontFamily: vars.fonts.primary,
    fontSize: vars.fontSizes.regular,
    fontWeight: vars.fontWeights.bold,
    margin: vars.space.zero,
  }),
  section: style({
    display: 'grid',
    gap: vars.space.g12,
  }),
  sectionTitle: style({
    fontFamily: vars.fonts.primary,
    fontSize: vars.fontSizes.semiBold,
    fontWeight: vars.fontWeights.bold,
    margin: vars.space.zero,
  }),
  grid: style({
    display: 'grid',
    gap: vars.space.g12,
    gridTemplateColumns: `repeat(auto-fit, minmax(${matrixCellMinWidth}, 1fr))`,
  }),
  cell: style({
    alignItems: 'start',
    display: 'grid',
    gap: vars.space.g8,
  }),
  label: style({
    color: vars.colors['text.almostBlack'],
    fontFamily: vars.fonts.primary,
    fontSize: vars.fontSizes.micro,
  }),
}
