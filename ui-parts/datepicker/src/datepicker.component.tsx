import React                               from 'react'
import DatepickerComponent                 from 'react-datepicker'

import { createAndInjectDatepickerStyles } from './styles'

const Datepicker = ({ ...props }) => {
  createAndInjectDatepickerStyles({
    arrowColor: 'blue',
    arrowHoverColor: 'red',
    cellActiveColor: '#376EFF',
  })

  return <DatepickerComponent {...props} />
}

export { Datepicker }
