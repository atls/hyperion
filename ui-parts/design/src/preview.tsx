import type { Preview }           from '@storybook/react'
import type { ReactNode }         from 'react'
import type { PropsWithChildren } from 'react'

import { useEffect }              from 'react'

import { globalThemeId }          from '@atls-ui-parts/theme'

const ThemeContainer = ({ children }: PropsWithChildren): ReactNode => {
  useEffect(() => {
    document.querySelector('body')?.setAttribute('id', globalThemeId)
  }, [])

  return children
}

const preview: Preview = {
  decorators: (Story) => (
    <ThemeContainer>
      <Story />
    </ThemeContainer>
  ),
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
