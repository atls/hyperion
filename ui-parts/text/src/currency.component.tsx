import React             from 'react'
import { FC }            from 'react'
import { Text }          from './text.component'
import { CurrencyProps } from './currency.interface'

const Currency: FC<CurrencyProps> = ({ amount, currency, format, ...props }) => (
  <Text {...props}>
    {new Intl.NumberFormat(format, { style: 'currency', currency })
      .format(amount)
      .replace(',00', '')}
  </Text>
)

Currency.defaultProps = {
  amount: 0,
  currency: 'USD',
  format: 'ru-RU',
}

export { Currency }
