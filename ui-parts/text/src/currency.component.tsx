import React             from 'react'
import { FC }            from 'react'
import { Text }          from './text.component'
import { CurrencyProps } from './currency.interface'

const Currency: FC<CurrencyProps> = ({ amount, currency, locale, ...props }) => (
  <Text {...props}>
    {new Intl.NumberFormat(locale, { style: 'currency', currency })
      .format(amount)
      .replace(',00', '')}
  </Text>
)

Currency.defaultProps = {
  amount: 0,
  currency: 'USD',
  locale: 'ru-RU',
}

export { Currency }
