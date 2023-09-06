import styled            from '@emotion/styled'

import React             from 'react'
import { FC }            from 'react'

import { CurrencyProps } from './currency.interface'
import { Text }          from './text.component'

const CurrencyChildren: FC<CurrencyProps> = ({
  currency,
  amount,
  locale,
  options,
  keepZeros = false,
  currencySignPlacement = 'suffix',
  ...props
}) => {
  const baseValue = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    ...options,
  }).format(amount)

  const valueWithKeepZeros = keepZeros ? baseValue : baseValue.replace(',00', '')
  const valueWithSuffix = valueWithKeepZeros
  const valueWithPrefix = `${valueWithKeepZeros.split('').pop()} ${amount}`

  return (
    <span {...props}>
      {currencySignPlacement === 'suffix' && valueWithSuffix}
      {currencySignPlacement === 'prefix' && valueWithPrefix}
    </span>
  )
}
const Currency = styled(Text.withComponent(CurrencyChildren))()

Currency.defaultProps = {
  amount: 0,
  currency: 'USD',
  locale: 'ru-RU',
  ...Text.defaultProps,
}

export { Currency }
