import { enUS }           from 'date-fns/locale/en-US'
import { ru }             from 'date-fns/locale/ru'
import { registerLocale } from 'react-datepicker'

export const registerLocales = (): void => {
  registerLocale('ru', ru)
  registerLocale('en-US', enUS)
}
