import React                               from 'react'
import { FC }                              from 'react'
import { useEffect }                       from 'react'
import DatepickerComponent                 from 'react-datepicker'
import { setDefaultLocale }                from 'react-datepicker'

import { registerLocales }                 from './locales'
import { createAndInjectDatepickerStyles } from './styles'
import { DatepickerProps }                 from './datepicker.interface'

const Datepicker: FC<DatepickerProps> = (props) => {
  useEffect(() => {
    registerLocales()
    setDefaultLocale('ru')
  }, [])

  useEffect(() => {
    createAndInjectDatepickerStyles(props)
  }, [props])

  return <DatepickerComponent {...props} />
}

export { Datepicker }
