import type { ReactNode }               from 'react'
import type { PropsWithChildren }       from 'react'

import { useEffect }                    from 'react'

import { globalThemeId }                from '@atls-ui-parts/theme'
import { createDesignStorybookPreview } from '@atls-ui/design-storybook/preview'

const ThemeContainer = ({ children }: PropsWithChildren): ReactNode => {
  useEffect(() => {
    document.querySelector('body')?.setAttribute('id', globalThemeId)
  }, [])

  return children
}

export default createDesignStorybookPreview({
  decorators: [
    (Story) => (
      <ThemeContainer>
        <Story />
      </ThemeContainer>
    ),
  ],
})
