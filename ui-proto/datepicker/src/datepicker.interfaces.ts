import { RefObject } from 'react'

export interface DatepickerProps {
  placeholder?: string
  endDate: Date
  startDate: Date | null
  setStartDate: (date: Date) => void
  setEndDate: (date: Date) => void
}

export interface CustomInputProps {
  customValue: string
  startDate: Date | null
  customPlaceholder?: string
  onClick: any
  ref: RefObject<HTMLInputElement>
}
