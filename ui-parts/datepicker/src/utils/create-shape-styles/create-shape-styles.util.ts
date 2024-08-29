import type { CSSProperties } from 'react'

import type { ShapeStyles }   from './create-shape-styles.interfaces.js'

export const createHeaderShapeStyles = (
  padding?: number | string,
  fontFamily?: string,
  fontWeight?: CSSProperties['fontWeight'],
  fontStyle?: string,
  fontSize?: number | string
): Record<string, CSSProperties> => ({
  '.react-datepicker__current-month': {
    paddingTop: padding,
    paddingBottom: padding,
    fontFamily,
    fontWeight,
    fontSize,
    fontStyle,
  },
})

export const createCellShapeStyles = (
  margin?: number | string,
  padding?: number | string,
  borderRadius?: number | string,
  inRangeBorderRadius?: number | string,
  fontSize?: number | string,
  fontFamily?: string,
  fontStyle?: string,
  fontWeight?: CSSProperties['fontWeight'],
  dayNameFontFamily?: string,
  dayNameFontStyle?: string,
  dayNameFontWeight?: CSSProperties['fontWeight'],
  dayNameFontSize?: number | string
): Record<string, CSSProperties> => ({
  '.react-datepicker__day-name': {
    margin,
    padding,
    fontFamily: dayNameFontFamily,
    fontStyle: dayNameFontStyle,
    fontWeight: dayNameFontWeight,
    fontSize: dayNameFontSize || fontSize,
  },
  '.react-datepicker__day, .react-datepicker__time-name': {
    margin,
    padding,
    borderRadius,
    fontFamily,
    fontStyle,
    fontWeight,
    fontSize,
  },
  '.react-datepicker__day--in-range': {
    borderRadius: inRangeBorderRadius,
  },
  '.react-datepicker__day-name:hover, .react-datepicker__day:hover, .react-datepicker__time-name:hover, .react-datepicker__day--range-start, .react-datepicker__day--range-end':
    {
      borderRadius,
    },
  '.react-datepicker__current-month': {
    paddingTop: padding,
    paddingBottom: padding,
  },
})

export const createDividerShapeStyles = (
  position?: 'bottom' | 'middle' | 'none',
  borderWidth?: number | string
): Record<string, CSSProperties> => ({
  '.react-datepicker__header': {
    borderStyle: 'solid',
    borderWidth: 0,
    borderBottomWidth: position === 'bottom' ? borderWidth : 0,
  },
  '.react-datepicker__day-names': {
    borderStyle: 'solid',
    borderWidth: 0,
    borderTopWidth: position === 'middle' ? borderWidth : 0,
  },
})

export const createInputShapeStyles = (
  size?: number,
  borderWidth?: number | string,
  padding?: number | string,
  fontSize?: number | string,
  fontWeight?: CSSProperties['fontWeight'],
  fontFamily?: string,
  borderRadius?: number | string
): Record<string, CSSProperties> => ({
  '.react-datepicker__input-container>input': {
    height: size,
    borderWidth,
    fontSize,
    fontWeight,
    fontFamily,
    padding,
    borderRadius,
  },
})

export const createShapeStyles = ({
  dividerPosition,
  dividerWidth,
  cellMargin,
  cellPadding,
  cellBorderRadius,
  cellInRangeBorderRadius,
  inputSize,
  inputBorderWidth,
  inputBorderRadius,
  inputPadding,
  fontSize,
  fontFamily,
  fontStyle,
  fontWeight,
  dayNameFontFamily,
  dayNameFontStyle,
  dayNameFontWeight,
  dayNameFontSize,
  currentMonthFontFamily,
  currentMonthFontStyle,
  currentMonthFontWeight,
  currentMonthFontSize,
  currentMonthPadding,
}: ShapeStyles): Record<string, CSSProperties> => ({
  ...createCellShapeStyles(
    cellMargin,
    cellPadding,
    cellBorderRadius,
    cellInRangeBorderRadius,
    fontSize,
    fontFamily,
    fontStyle,
    fontWeight,
    dayNameFontFamily,
    dayNameFontStyle,
    dayNameFontWeight,
    dayNameFontSize
  ),
  ...createDividerShapeStyles(dividerPosition, dividerWidth),
  ...createInputShapeStyles(
    inputSize,
    inputBorderWidth,
    inputPadding,
    fontSize,
    fontWeight,
    fontFamily,
    inputBorderRadius
  ),
  ...createHeaderShapeStyles(
    currentMonthPadding,
    currentMonthFontFamily,
    currentMonthFontWeight,
    currentMonthFontStyle,
    currentMonthFontSize
  ),
})
