import { styleFn }                from 'styled-system'

import { createAppearanceStyles } from '@atls-ui-parts/datepicker'

const getAppearanceStyles = (theme): styleFn =>
  () =>
    createAppearanceStyles({
      arrowColor: theme.colors.datepicker.blue,
      arrowHoverColor: theme.colors.datepicker.blue,
      cellColor: 'transparent',
      cellFontColor: theme.colors.datepicker.deepBlack,
      cellActiveColor: theme.colors.datepicker.blue,
      cellActiveFontColor: theme.colors.datepicker.white,
      cellHoverColor: theme.colors.datepicker.blue,
      cellHoverFontColor: theme.colors.datepicker.white,
      cellInRangeColor: theme.colors.datepicker.brightBlue,
      cellInRangeFontColor: theme.colors.datepicker.deepBlack,
      cellInRangeHoverFontColor: theme.colors.datepicker.white,
      dividerColor: theme.colors.datepicker.transparentLightGray,
      headerBackgroundColor: theme.colors.datepicker.white,
    })

export { getAppearanceStyles }
