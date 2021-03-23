import { GetCurrency, GetSelectValue } from './types'

export const value: GetSelectValue = (selectValue, options, valueField, displayField) => {
  if (typeof selectValue === 'string') {
    const [current] = options.filter((option) => option[valueField] === selectValue)

    if (current && current[displayField]) {
      return current[displayField]
    }
  }

  if (selectValue && selectValue[displayField]) {
    return selectValue[displayField]
  }

  return ''
}

export const currency: GetCurrency = (val, intl) =>
  intl.formatNumber(val, {
    style: 'currency',
    currency: 'RUB',
    maximumSignificantDigits: 10,
  })
