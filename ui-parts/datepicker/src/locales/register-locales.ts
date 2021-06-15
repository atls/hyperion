import { registerLocale } from 'react-datepicker'

import { ru }             from './locales'
import { enAU }           from './locales'

const registerLocales = () => {
  registerLocale('ru', ru)
  registerLocale('en-AU', enAU)
}

export { registerLocales }
