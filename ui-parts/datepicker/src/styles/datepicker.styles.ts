import { injectGlobal }               from '@emotion/css'

import { DatepickerStyles }           from './datepicker-styles.interfaces'
import { createAppearanceStyles }     from './appearance'
import { createInjectableBaseStyles } from './base'
import { createShapeStyles }          from './shape'

export const injectBaseStyles = createInjectableBaseStyles()

export const createAndInjectDatepickerStyles = ({
  arrowColor,
  arrowHoverColor,
  cellColor,
  cellFontColor,
  cellActiveFontColor,
  cellActiveColor,
  cellHoverColor,
  cellHoverFontColor,
  cellInRangeColor,
  cellInRangeFontColor,
  cellInRangeHoverColor,
  cellInRangeHoverFontColor,
  cellInRangeBorderRadius,
  cellMargin,
  cellPadding,
  cellBorderRadius,
  dividerPosition,
  dividerWidth,
  dividerColor,
  fontSize,
  fontFamily,
  fontStyle,
  fontWeight,
  headerBackgroundColor,
  inputBackgroundColor,
  inputBorderColor,
  inputBorderRadius,
  inputActiveBorderColor,
  inputSize,
  inputBorderWidth,
  inputPadding,
  currentMonthPadding,
  currentMonthFontFamily,
  currentMonthFontSize,
  currentMonthFontStyle,
  currentMonthFontWeight,
  currentMonthFontColor,
  dayNameFontFamily,
  dayNameFontWeight,
  dayNameFontStyle,
  dayNameFontColor,
}: DatepickerStyles) => {
  injectBaseStyles()
  injectGlobal(
    createAppearanceStyles({
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
      dayNameFontColor,
      currentMonthFontColor,
    })
  )
  injectGlobal(
    // @ts-ignore
    createShapeStyles({
      cellMargin,
      cellPadding,
      cellBorderRadius,
      fontSize,
      fontFamily,
      fontStyle,
      fontWeight,
      dividerPosition,
      dividerWidth,
      cellInRangeBorderRadius,
      inputSize,
      inputBorderWidth,
      inputBorderRadius,
      inputPadding,
      currentMonthPadding,
      currentMonthFontFamily,
      currentMonthFontSize,
      currentMonthFontStyle,
      currentMonthFontWeight,
      dayNameFontFamily,
      dayNameFontWeight,
      dayNameFontStyle,
    })
  )
}
