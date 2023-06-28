import { Global }          from '@emotion/react'
import { css }             from '@emotion/react'

import React               from 'react'

import { injectFontFaces } from './inject-fonts'

export interface Props {
  includeDefaultFonts?: boolean
}

export const GlobalStyles = ({ includeDefaultFonts }: Props) => {
  if (includeDefaultFonts) {
    import('./fonts').then((res) => { injectFontFaces([
      { src: res.RobotoRegular, fileExt: 'ttf', fileName: 'Roboto-Regular', weight: 400 }
    ]) })

    return (
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            height: 100%;
            overflow: hidden;
            -webkit-font-smoothing: antialiased;
            -webkit-overflow-scrolling: touch;
          }
    
          #__next {
            height: 100%;
          }
        `}
      />
    )
  }

  return (
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          height: 100%;
          overflow: hidden;
          -webkit-font-smoothing: antialiased;
          -webkit-overflow-scrolling: touch;
        }
  
        #__next {
          height: 100%;
        }
    `}
    />
  )
}
