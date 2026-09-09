import type { CountryCode } from 'libphonenumber-js'

import { AsYouType }        from 'libphonenumber-js'

export const formatPhoneValue = (value: string, defaultCountry?: CountryCode): string => {
  if (!value) {
    return ''
  }

  return new AsYouType(defaultCountry).input(value)
}
