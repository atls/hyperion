import { Preview }           from '@storybook/react'

import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'
import { useEffect }         from 'react'

import { globalThemeId }     from '@atls-ui-parts/theme'

const ThemeContainer: FC<PropsWithChildren> = ({ children }) => {
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
