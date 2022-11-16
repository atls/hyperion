import { RefObject } from 'react'

export interface DatepickerProps {
  placeholder?: string
  startDate: Date | null
  endDate: Date
  setStartDate: (date: Date) => void
  setEndDate: (date: Date) => void
}

export interface CustomInputProps {
  customValue: string
  customPlaceholder?: string
  startDate: Date | null
  onClick: any
  ref: RefObject<HTMLInputElement>
}
