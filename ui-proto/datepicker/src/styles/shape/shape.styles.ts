import { styleFn }           from 'styled-system'

import { createShapeStyles } from '@atls-ui-parts/datepicker'

const getShapeStyles = (theme): styleFn =>
  () =>
    createShapeStyles({
      dividerPosition: 'middle',
      dividerWidth: '1px',
      cellMargin: 0,
      cellPadding: 10,
      cellBorderRadius: 4,
      cellInRangeBorderRadius: 0,
      fontSize: 14,
      fontWeight: '400',
      fontFamily: theme.fonts.primary,
    })

export { getShapeStyles }
