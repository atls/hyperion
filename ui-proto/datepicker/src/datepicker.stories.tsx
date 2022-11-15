import React          from 'react'
import { useState }   from 'react'

import { Datepicker } from './datepicker.component'

export default {
  title: 'Components/Datepicker',
}

export const Base = () => {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())

  return (
    <Datepicker
      startDate={startDate}
      endDate={endDate}
      setEndDate={setEndDate}
      setStartDate={setStartDate}
      placeholder='Выберите дату'
    />
  )
}
