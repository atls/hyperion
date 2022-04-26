import React                               from 'react'
import DatepickerComponent                 from 'react-datepicker'
import { FC }                              from 'react'
import { useEffect }                       from 'react'
import { setDefaultLocale }                from 'react-datepicker'

import { DatepickerProps }                 from './datepicker.interface'
import { registerLocales }                 from './locales'
import { createAndInjectDatepickerStyles } from './styles'

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
