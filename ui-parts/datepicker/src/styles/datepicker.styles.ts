import { injectGlobal }               from '@emotion/css'

import { createInjectableBaseStyles } from './base'
import { createAppearanceStyles }     from './appearance'
import { createShapeStyles }          from './shape'
import { DatepickerStyles }           from './datepicker-styles.interfaces'

export const injectBaseStyles = createInjectableBaseStyles()

export const createAndInjectDatepickerStyles = ({
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
    })
  )
}
