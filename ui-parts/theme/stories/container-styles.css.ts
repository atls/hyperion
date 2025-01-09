import { createContainer }       from '@vanilla-extract/css'
import { style }                 from '@vanilla-extract/css'

import { createContainerStyles } from '@atls-ui-parts/theme'

const wrapperContainer = createContainer()

export const wrapperStyles = style({
  containerName: wrapperContainer,
  containerType: 'inline-size',
  width: '100%',
  maxWidth: '500px',
  height: '50px',
})

export const componentStyles = style({
  background: '#B8C2F5',
  color: '#2C348D',
  fontSize: '24px',
})

export const componentContainerStyles = createContainerStyles({
  breakpoint: '300px',
  container: wrapperContainer,
  css: {
    background: '#BE95A2',
    color: '#4D236E',
    fontSize: '16px',
  },
})
