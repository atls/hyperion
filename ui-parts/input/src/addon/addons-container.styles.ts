import { styleFn }               from 'styled-system'
import { ifProp }                from 'styled-tools'

import { execAndSerialize }      from '@atls-ui-parts/styles'
import { combine }               from '@atls-ui-parts/styles'

import { AddonsContainerStyles } from './addons-container.interfaces'

export const createAddonsContainerBaseStyles: styleFn = () => () => ({
  width: '100%',
  display: 'flex',
})

export const createAddonsContainerAttachStyles: styleFn = (borderWidth: number) =>
  ifProp('attach', {
    position: 'relative',
    marginRight: borderWidth,
    '&:focus': {
      zIndex: 1,
    },
    '&:hover': {
      zIndex: 2,
    },
  })

export const createAddonsContainerStyles = ({ borderWidth = 1 }: AddonsContainerStyles): styleFn =>
  execAndSerialize(
    combine(createAddonsContainerBaseStyles(), createAddonsContainerAttachStyles(borderWidth))
  )
