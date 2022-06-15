import { ShapeStyles } from './shape.interfaces'

export const createHeaderShapeStyles = (
  padding?: number | string,
  fontFamily?: string,
  fontWeight?: string,
  fontStyle?: string,
  fontSize?: number | string
) => ({
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
  fontWeight?: string,
  dayNameFontFamily?: string,
  dayNameFontStyle?: string,
  dayNameFontWeight?: string
) => ({
  '.react-datepicker__day-name': {
    margin,
    padding,
    fontFamily: dayNameFontFamily,
    fontStyle: dayNameFontStyle,
    fontWeight: dayNameFontWeight,
    fontSize,
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
  '.react-datepicker__navigation': {
    marginTop: padding,
  },
})

export const createDividerShapeStyles = (
  position?: 'middle' | 'bottom' | 'none',
  borderWidth?: number | string
) => ({
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
  fontWeight?: string,
  fontFamily?: string,
  borderRadius?: number | string
) => ({
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
  currentMonthFontFamily,
  currentMonthFontStyle,
  currentMonthFontWeight,
  currentMonthFontSize,
  currentMonthPadding,
}: ShapeStyles) => ({
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
    dayNameFontWeight
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
