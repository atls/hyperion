export type GetSelectValue = (
  value: any[] | any | string,
  options: any[],
  valueField: string,
  displayField?: string,
) => string

export type GetCurrency = (value: string, intl: any) => string

export interface OptionStyleProps {
  optionFontSize: string | number
  optionLineHeight: string | number
  optionFontWeight: string | number
  optionBackgroundColor: string
  optionHoverBackgroundColor: string
  optionActiveBackgroundColor: string
  isActive?: boolean
}

export interface OptionProps extends OptionStyleProps {
  activeValue?: any
  data?: any
  displayField?: string
  valueField?: string
  currency?: boolean
  onSelect?: (value: any) => void
}

export interface OptionsProps extends OptionProps {
  optionsBackground: string
  optionsBorderRadius: string | number
  onToggle?: () => void
  options?: any[]
  select?: HTMLElement
}

export interface SelectProps extends Omit<OptionsProps, 'select'> {
  value?: any
  placeholder?: string
  disabled?: boolean
  toggled?: boolean
  toggle?: (value: boolean) => void
  onOpen?: () => void
}
