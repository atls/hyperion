import { ShapeStyles } from './shape.interfaces'

export const createCellShapeStyles = (
  margin?: number | string,
  padding?: number | string,
  borderRadius?: number | string,
  inRangeBorderRadius?: number | string,
  fontSize?: number | string,
  fontFamily?: string,
  fontStyle?: string,
  fontWeight?: string
) => ({
  '.react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name': {
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
}: ShapeStyles) => ({
  ...createCellShapeStyles(
    cellMargin,
    cellPadding,
    cellBorderRadius,
    cellInRangeBorderRadius,
    fontSize,
    fontFamily,
    fontStyle,
    fontWeight
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
})
