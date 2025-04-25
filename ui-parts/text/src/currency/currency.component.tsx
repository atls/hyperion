import type { CurrencyProps } from './currency.interfaces.js'

import { forwardRef }         from 'react'
import React                  from 'react'

import { Condition }          from '@atls-ui-parts/condition'

import { Text }               from '../text/index.js'

export const Currency = forwardRef<HTMLSpanElement, CurrencyProps>((
  {
    options,
    currency = 'USD',
    amount = 0,
    locale = 'ru-RU',
    keepZeros = false,
    currencySignPlacement = 'suffix',
    ...props
  },
  ref
) => {
  const baseValue = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    ...options,
  }).format(amount)

  const valueWithKeepZeros = keepZeros ? baseValue : baseValue.replace(',00', '')
  const valueWithSuffix = valueWithKeepZeros
  const valueWithPrefix = `${valueWithKeepZeros.split('').pop() || ''} ${amount}`

  return (
    <Text ref={ref} {...props}>
      <Condition match={currencySignPlacement === 'suffix'}>{valueWithSuffix}</Condition>
      <Condition match={currencySignPlacement === 'prefix'}>{valueWithPrefix}</Condition>
    </Text>
  )
})
