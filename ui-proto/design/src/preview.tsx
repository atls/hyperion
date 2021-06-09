import React             from 'react'

import { ThemeProvider } from '@atls-ui-proto/theme'

const withThemeProvider = (Story, context) => (
  <ThemeProvider>
    <Story {...context} />
  </ThemeProvider>
)

export const decorators = [withThemeProvider]

export const parameters = {
  controls: { expanded: true },
  layout: 'centered',
}
