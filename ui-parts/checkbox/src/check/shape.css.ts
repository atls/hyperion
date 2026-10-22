import { globalStyle } from '@vanilla-extract/css'
import { style }       from '@vanilla-extract/css'

const checkSmallShapeStyles = style({
  width: '100%',
  height: '100%',
  fontSize: '12px',
  lineHeight: 1,
})

const checkMediumShapeStyles = style({
  width: '100%',
  height: '100%',
  fontSize: '14px',
  lineHeight: 1,
})

const checkLargeShapeStyles = style({
  width: '100%',
  height: '100%',
  fontSize: '18px',
  lineHeight: 1,
})

globalStyle(`${checkSmallShapeStyles} > svg`, {
  width: '12px',
  height: '12px',
})

globalStyle(`${checkMediumShapeStyles} > svg`, {
  width: '14px',
  height: '14px',
})

globalStyle(`${checkLargeShapeStyles} > svg`, {
  width: '18px',
  height: '18px',
})

export const checkShapeStyles = {
  sm: checkSmallShapeStyles,
  md: checkMediumShapeStyles,
  lg: checkLargeShapeStyles,
}
