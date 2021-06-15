import React                               from 'react'
import { FC }                              from 'react'
import DatepickerComponent                 from 'react-datepicker'
import { setDefaultLocale }                from 'react-datepicker'

import { registerLocales }                 from './locales'
import { createAndInjectDatepickerStyles } from './styles'
import { DatepickerProps }                 from './datepicker.interface'

const Datepicker: FC<DatepickerProps> = (props) => {
  registerLocales()
  setDefaultLocale('ru')

  createAndInjectDatepickerStyles(props)

  return <DatepickerComponent {...props} />
}

export { Datepicker }
