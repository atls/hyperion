import React                                 from 'react'
import { useState }                          from 'react'
import { Datepicker as DatepickerComponent } from './datepicker.component'

export default {
  title: 'Components/Datepicker',
}

export const Datepicker = ({}) => {
  const [startDate, setStartDate] = useState(new Date())
  return <DatepickerComponent selected={startDate} onChange={(date) => setStartDate(date)} />
}

Datepicker.args = {}

Datepicker.argTypes = {

}
