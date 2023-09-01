import styled                                from '@emotion/styled'

import React                                 from 'react'
import { FC }                                from 'react'
import { forwardRef }                        from 'react'

import { Datepicker as DatepickerComponent } from '@atls-ui-parts/datepicker'
import { Input }                             from '@atls-ui-proto/input'

import { DatepickerProps }                   from './datepicker.interfaces'
import { CustomInputProps }                  from './datepicker.interfaces'
import { baseStyles }                        from './datepicker.styles'
import { appearanceStyles }                  from './datepicker.styles'
import { shapeStyles }                       from './datepicker.styles'

const CustomInput = forwardRef(({
  onClick,
  customValue,
  customPlaceholder,
  startDate,
  ref,
}: CustomInputProps) => (
  <Input
    ref={ref}
    value={startDate !== null ? customValue : ''}
    onClick={onClick}
    placeholder={customPlaceholder}
    style={{ height: 48 }}
  />
))

export const DatepickerElement = styled.div<any>(baseStyles, shapeStyles, appearanceStyles)

const Datepicker: FC<DatepickerProps> = ({
  startDate,
  endDate,
  setEndDate,
  setStartDate,
  placeholder,
  ...props
}) => {
  const handleDateChange = (date) => {
    if (date > endDate) {
      setStartDate(endDate)
      setEndDate(date)
      return
    }
    setStartDate(date)
  }

  const formattedStartDate = Intl.DateTimeFormat('ru').format(startDate!)
  const formattedEndDate = Intl.DateTimeFormat('ru').format(endDate!)

  const dateRangeValue = `${formattedStartDate}-${formattedEndDate}`

  return (
    <DatepickerElement>
      <DatepickerComponent
        // @ts-ignore
        isClearable
        strictParsing
        startDate={startDate}
        endDate={endDate}
        onChange={handleDateChange}
        selected={startDate}
        customInput={
          // @ts-ignore
          <CustomInput
            startDate={startDate}
            customValue={dateRangeValue}
            customPlaceholder={placeholder}
          />
        }
        popperPlacement='left'
        {...props}
      />
    </DatepickerElement>
  )
}

export { Datepicker }
