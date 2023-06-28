import * as theme                                from './theme'

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
}: PropsWithChildren<Props>) => (
  <>
    <GlobalStyles includeDefaultFonts={includeDefaultFonts} />
    <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
  </>
)
