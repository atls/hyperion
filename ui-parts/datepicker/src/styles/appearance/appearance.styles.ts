import { AppearanceStyles } from './appearance.interfaces'

export const createCellColorStyles = (
  backgroundColor: string,
  color: string,
  activeColor: string,
  activeFontColor: string,
  hoverColor: string,
  hoverFontColor: string
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
  '.react-datepicker__day--selected:hover': {
    backgroundColor: activeColor,
    color: activeFontColor,
  },
})

export const createCellFontStyles = (
  fontFamily: string,
  fontStyle: string,
  fontWeight: string
) => ({
  '.react-datepicker__day': {
    fontFamily,
    fontStyle,
    fontWeight,
  },
})

export const createArrowColorStyles = (borderColor: string, borderHoverColor: string) => ({
  '.react-datepicker__navigation-icon::before': {
    borderColor,
  },
  '.react-datepicker__navigation:hover *::before': {
    borderColor: borderHoverColor,
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
  fontFamily,
  fontStyle,
  fontWeight,
}: AppearanceStyles) => ({
  ...createCellColorStyles(
    cellColor,
    cellFontColor,
    cellActiveColor,
    cellActiveFontColor,
    cellHoverColor,
    cellHoverFontColor
  ),
  ...createCellFontStyles(fontFamily, fontStyle, fontWeight),
  ...createArrowColorStyles(arrowColor, arrowHoverColor),
})
