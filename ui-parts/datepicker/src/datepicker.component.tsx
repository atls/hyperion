import 'react-datepicker/dist/react-datepicker.css'

import type { ReactNode }         from 'react'

import type { DatepickerProps }   from './datepicker.interface.js'

import { injectGlobal }           from '@emotion/css'
import { useEffect }              from 'react'
import { setDefaultLocale }       from 'react-datepicker'
import DatepickerComponent        from 'react-datepicker'

import { createAppearanceStyles } from './utils/index.js'
import { createShapeStyles }      from './utils/index.js'
import { registerLocales }        from './utils/index.js'

export const Datepicker = ({ withBaseStyle = true, ...props }: DatepickerProps): ReactNode => {
  useEffect(() => {
    registerLocales()
    setDefaultLocale('ru')
  }, [])

  useEffect(() => {
    if (withBaseStyle) {
      const shapeStyles = createShapeStyles(props)
      const appearanceStyles = createAppearanceStyles(props)

      injectGlobal(shapeStyles as never, appearanceStyles as never)
    }
  }, [withBaseStyle, props])

  // @ts-expect-error correct default import
  return <DatepickerComponent {...props} />
}
