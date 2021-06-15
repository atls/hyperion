import { AppearanceStyles } from './appearance.interfaces'

export const createCellColorStyles = (
  backgroundColor?: string,
  color?: string,
  activeColor?: string,
  activeFontColor?: string,
  hoverColor?: string,
  hoverFontColor?: string,
  inRangeColor?: string,
  inRangeFontColor?: string,
  inRangeHoverColor?: string,
  inRangeHoverFontColor?: string
) => ({
  '.react-datepicker__day': {
    backgroundColor,
    color,
  },
  '.react-datepicker__day--selected': {
    backgroundColor: activeColor,
    color: activeFontColor,
  },
  '.react-datepicker__day:hover': {
    backgroundColor: hoverColor,
    color: hoverFontColor,
  },
  '.react-datepicker__day--in-range, .react-datepicker__day--in-selecting-range': {
    backgroundColor: inRangeColor,
    color: inRangeFontColor,
  },
  '.react-datepicker__day--selected:hover, .react-datepicker__day--keyboard-selected, .react-datepicker__day--range-start, .react-datepicker__day--range-end':
    {
      backgroundColor: activeColor,
      color: activeFontColor,
    },
  '.react-datepicker__day--in-range:hover, .react-datepicker__day--in-selecting-range:hover': {
    backgroundColor: inRangeHoverColor,
    color: inRangeHoverFontColor,
  },
})

export const createArrowColorStyles = (borderColor?: string, borderHoverColor?: string) => ({
  '.react-datepicker__navigation-icon::before': {
    borderColor,
  },
  '.react-datepicker__navigation:hover *::before': {
    borderColor: borderHoverColor,
  },
})

export const createHeaderColorStyles = (backgroundColor?: string, borderColor?: string) => ({
  '.react-datepicker__header ': {
    backgroundColor,
    borderColor,
  },
})

export const createDividerColorStyles = (borderColor?: string) => ({
  '.react-datepicker__day-names': {
    borderTopColor: borderColor,
  },
})

export const createInputColorStyles = (
  backgroundColor?: string,
  borderColor?: string,
  activeBorderColor?: string
) => ({
  '.react-datepicker__input-container>input': {
    backgroundColor,
    borderColor,
  },
  '.react-datepicker__input-container>input:focus': {
    borderColor: activeBorderColor,
  },
})

export const createAppearanceStyles = ({
  arrowColor,
  arrowHoverColor,
  cellColor,
  cellFontColor,
  cellActiveColor,
  cellActiveFontColor,
  cellHoverColor,
  cellHoverFontColor,
  cellInRangeColor,
  cellInRangeFontColor,
  cellInRangeHoverColor,
  cellInRangeHoverFontColor,
  dividerColor,
  headerBackgroundColor,
  inputBackgroundColor,
  inputBorderColor,
  inputActiveBorderColor,
}: AppearanceStyles) => ({
  ...createCellColorStyles(
    cellColor,
    cellFontColor,
    cellActiveColor,
    cellActiveFontColor,
    cellHoverColor,
    cellHoverFontColor,
    cellInRangeColor,
    cellInRangeFontColor,
    cellInRangeHoverColor,
    cellInRangeHoverFontColor
  ),
  ...createArrowColorStyles(arrowColor, arrowHoverColor),
  ...createHeaderColorStyles(headerBackgroundColor, dividerColor),
  ...createDividerColorStyles(dividerColor),
  ...createInputColorStyles(inputBackgroundColor, inputBorderColor, inputActiveBorderColor),
})
