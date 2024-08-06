import { AppearanceStyles } from './create-appearance-styles.interfaces.js'
import { CSSColor }         from './create-appearance-styles.interfaces.js'

export const createCellColorStyles = (
  backgroundColor?: CSSColor,
  color?: CSSColor,
  activeColor?: CSSColor,
  activeFontColor?: CSSColor,
  hoverColor?: CSSColor,
  hoverFontColor?: CSSColor,
  inRangeColor?: CSSColor,
  inRangeFontColor?: CSSColor,
  inRangeHoverColor?: CSSColor,
  inRangeHoverFontColor?: CSSColor,
  dayNameFontColor?: CSSColor
) => ({
  '.react-datepicker__day-name': {
    color: dayNameFontColor,
  },
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

export const createArrowColorStyles = (borderColor?: CSSColor, borderHoverColor?: CSSColor) => ({
  '.react-datepicker__navigation-icon::before': {
    borderColor,
  },
  '.react-datepicker__navigation:hover *::before': {
    borderColor: borderHoverColor,
  },
})

export const createHeaderColorStyles = (
  backgroundColor?: CSSColor,
  borderColor?: CSSColor,
  fontColor?: CSSColor
) => ({
  '.react-datepicker__header ': {
    backgroundColor,
    borderColor,
  },
  '.react-datepicker__current-month': {
    color: fontColor,
  },
})

export const createDividerColorStyles = (borderColor?: CSSColor) => ({
  '.react-datepicker__day-names': {
    borderTopColor: borderColor,
  },
})

export const createInputColorStyles = (
  backgroundColor?: CSSColor,
  borderColor?: CSSColor,
  activeBorderColor?: CSSColor
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
  dayNameFontColor,
  arrowColor,
  arrowHoverColor,
  headerBackgroundColor,
  dividerColor,
  currentMonthFontColor,
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
    cellInRangeHoverFontColor,
    dayNameFontColor
  ),
  ...createArrowColorStyles(arrowColor, arrowHoverColor),
  ...createHeaderColorStyles(headerBackgroundColor, dividerColor, currentMonthFontColor),
  ...createDividerColorStyles(dividerColor),
  ...createInputColorStyles(inputBackgroundColor, inputBorderColor, inputActiveBorderColor),
})
