import { fallbackVar }             from '@vanilla-extract/css'
import { style }                   from '@vanilla-extract/css'

import { opacity }                 from '@atls-ui/theme'
import { animations }              from '@atls-ui/theme'
import { borderStyles }            from '@atls-ui/theme/tokens'
import { borderWidths }            from '@atls-ui/theme/tokens'
import { spacing }                 from '@atls-ui/theme/tokens'
import { typography }              from '@atls-ui/theme/tokens'

import { inputAnimationVariables } from '../../animation/styles.css.js'
import { appearanceVariables }     from '../appearance/styles.css.js'
import { contentGap }              from '../shape/variants.css.js'

export const containerStyles = style({
  display: 'inline-grid',
  gap: spacing.component.xs,
  maxWidth: '100%',
  selectors: {
    '&[hidden]': {
      display: 'none',
    },
  },
})

export const fieldStyles = style({
  alignItems: 'center',
  borderStyle: borderStyles.solid,
  borderWidth: borderWidths.sm,
  boxSizing: 'border-box',
  cursor: 'text',
  display: 'flex',
  gap: fallbackVar(contentGap, spacing.component.lg),
  maxWidth: '100%',
  transitionProperty: 'background, border-color, box-shadow',
  transitionDuration: fallbackVar(
    inputAnimationVariables.unfilled.duration,
    animations.duration.sm
  ),
  transitionTimingFunction: fallbackVar(
    inputAnimationVariables.unfilled.easing,
    animations.easing.ease
  ),
  selectors: {
    '&:is(button)': { cursor: 'pointer' },
    '&:where([data-filled="true"], :has(:is(input, textarea):not(:placeholder-shown)))': {
      transitionDuration: fallbackVar(
        inputAnimationVariables.filled.duration,
        animations.duration.sm
      ),
      transitionTimingFunction: fallbackVar(
        inputAnimationVariables.filled.easing,
        animations.easing.ease
      ),
    },
    '&:hover': {
      transitionDuration: fallbackVar(
        inputAnimationVariables.hover.duration,
        animations.duration.sm
      ),
      transitionTimingFunction: fallbackVar(
        inputAnimationVariables.hover.easing,
        animations.easing.ease
      ),
    },
    '&:focus-within': {
      transitionDuration: fallbackVar(
        inputAnimationVariables.focused.duration,
        animations.duration.sm
      ),
      transitionTimingFunction: fallbackVar(
        inputAnimationVariables.focused.easing,
        animations.easing.ease
      ),
    },
    '&:has(:is(input, textarea)[aria-busy="true"])': {
      transitionDuration: fallbackVar(
        inputAnimationVariables.loading.duration,
        animations.duration.sm
      ),
      transitionTimingFunction: fallbackVar(
        inputAnimationVariables.loading.easing,
        animations.easing.ease
      ),
    },
    '&[data-disabled="true"]': {
      cursor: 'not-allowed',
    },
  },
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transitionDuration: `${animations.duration.none} !important`,
    },
  },
})

export const inputStyles = style({
  appearance: 'none',
  background: 'none',
  border: borderWidths.none,
  boxSizing: 'border-box',
  color: 'inherit',
  flex: '1 1 auto',
  font: 'inherit',
  letterSpacing: 'inherit',
  lineHeight: 'inherit',
  margin: spacing.component.none,
  minWidth: spacing.component.none,
  outline: borderWidths.none,
  padding: spacing.component.none,
  width: '100%',
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
    '&::placeholder': {
      color: appearanceVariables.unfilled.placeholder,
      opacity: opacity.full,
    },
    [`${fieldStyles}:hover:not([data-disabled="true"]):not([data-error="true"]) &::placeholder`]: {
      color: appearanceVariables.hover.placeholder,
    },
    [`${fieldStyles}:focus-within:not([data-disabled="true"]):not([data-error="true"]) &::placeholder`]:
      {
        color: appearanceVariables.focused.placeholder,
      },
    [`${fieldStyles}[data-error="true"]:not([data-disabled="true"]) &::placeholder`]: {
      color: appearanceVariables.error.placeholder,
    },
    [`${fieldStyles}[data-disabled="true"] &::placeholder`]: {
      color: appearanceVariables.disabled.placeholder,
    },
  },
})

export const messageStyles = style({
  ...typography.overline,
  margin: spacing.component.none,
  overflowWrap: 'anywhere',
})
