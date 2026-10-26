import { globalStyle } from '@vanilla-extract/css'
import { style }       from '@vanilla-extract/css'

const checkSmallShapeStyles = style({
  fontSize: '12px',
})

const checkMediumShapeStyles = style({
  fontSize: '14px',
})

const checkLargeShapeStyles = style({
  fontSize: '18px',
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
