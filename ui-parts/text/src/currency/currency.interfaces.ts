import { TextProps } from '../text/index.js'

export interface CurrencyProps extends TextProps {
  amount: number
  currency: string
  options: Omit<Intl.NumberFormatOptions, 'style' | 'currency'>
  locale?: string
  keepZeros?: boolean
  currencySignPlacement?: 'prefix' | 'suffix'
}
