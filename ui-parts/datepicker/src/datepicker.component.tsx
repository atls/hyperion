import 'react-datepicker/dist/react-datepicker.css'

import { injectGlobal }           from '@emotion/css'
import { FC }                     from 'react'
import { useEffect }              from 'react'
import { setDefaultLocale }       from 'react-datepicker'
import React                      from 'react'
import DatepickerComponent        from 'react-datepicker'

import { DatepickerProps }        from './datepicker.interface.js'
import { createAppearanceStyles } from './utils/index.js'
import { createShapeStyles }      from './utils/index.js'
import { registerLocales }        from './utils/index.js'

export const Datepicker: FC<DatepickerProps> = ({ withBaseStyle = true, ...props }) => {
  useEffect(() => {
    registerLocales()
    setDefaultLocale('ru')
  }, [])

  useEffect(() => {
    if (withBaseStyle) {
      const shapeStyles = createShapeStyles(props)
      const appearanceStyles = createAppearanceStyles(props)

      injectGlobal(shapeStyles, appearanceStyles)
    }
  }, [withBaseStyle, props])

  // @ts-ignore correct default import
  return <DatepickerComponent {...props} />
}
