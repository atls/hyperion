import type { ContainerStyles } from './create-container-styles.interfaces.js'

import { style }                from '@vanilla-extract/css'

export const createContainerStyles = ({ container, breakpoint, css }: ContainerStyles): string =>
  style({
    '@container': {
      [`${container || ''} (max-width: ${breakpoint})`]: css,
    },
  })
