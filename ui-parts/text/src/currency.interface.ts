export interface CurrencyProps {
  amount: number
  currency: string
  locale?: string
  options: Omit<Intl.NumberFormatOptions, 'style' | 'currency'>
}
