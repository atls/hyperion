import styled                     from '@emotion/styled'

import React                      from 'react'

import { useGoogleFonts }         from '@atls/storybook-google-fonts'

// @ts-ignore
import mdx                        from './button.docs.mdx'
import { GhostButton as Button }  from './ghost-button'
import { createAppearanceStyles } from './appearance'
import { templates }              from './button.templates'
import { createShapeStyles }      from './shape'

export default {
  title: 'Components/Button',
  parameters: {
    docs: {
      page: mdx,
    },
    development: {
      templates,
    },
  },
}

export const GhostButton = ({
  containerWith,
  children,
  fontFamily,
  fontSize,
  fontWeight,
  fontColor,
  backgroundColor,
}) => {
  useGoogleFonts(fontFamily, fontWeight)

  const StoryGhostButton = styled(Button)(
    createAppearanceStyles({
      fontColor,
      backgroundColor,
    }),
    createShapeStyles({
      size: 'auto',
      fontSize,
    })
  )

  return (
    <div style={{ width: containerWith, display: 'flex', justifyContent: 'center' }}>
      <StoryGhostButton>
        <div>{children}</div>
      </StoryGhostButton>
    </div>
  )
}

GhostButton.args = {
  children: 'Кнопка',
  containerWith: 200,
  fontFamily: 'Roboto',
  fontWeight: 400,
  fontSize: 12,
  fontColor: 'black',
  backgroundColor: 'transparent',
}
