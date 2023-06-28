import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import React                                     from 'react'
import { PropsWithChildren }                     from 'react'

import { GlobalStyles }                          from './global.styles'
import { Props }                                 from './global.styles'

/**
 * Proto theme provider
 * @param includeDefaultFonts - include Roboto as self-host. Default = `false`
 * @param children
 */
export const ThemeProvider = ({
  children,
  includeDefaultFonts = false,
}: PropsWithChildren<Props>) => {
  let theme
  import('./theme')
    .then((res) => {
      // eslint-disable-next-line
      includeDefaultFonts
        ? (theme = res)
        : (theme = { colors: res.colors, fontSizes: res.fontSizes, fontWeights: res.fontWeights })
    })
    .catch((err) => {
      throw err
    })

  return (
    <>
      <GlobalStyles includeDefaultFonts={includeDefaultFonts} />
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </>
  )
}
