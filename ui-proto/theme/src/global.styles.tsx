import { Global } from '@emotion/react'
import { css }    from '@emotion/react'

import React      from 'react'

export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

      html,
      body {
        margin: 0;
        overflow: hidden;
        height: 100%;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
      }

      #__next {
        height: 100%;
      }
    `}
  />
)
