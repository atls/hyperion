import type { ReactNode }                from 'react'

import type { ImageBoxPlaceholderProps } from './image-box-placeholder.interfaces.js'

import { Box }                           from '@atls-ui-parts/layout'

import { ImagePlaceholder }              from '../image-placeholder/index.js'

export const ImageBoxPlaceholder = ({
  size = 32,
  color = '#A0A4B3',
  backgroundColor = '$lightPurple',
}: ImageBoxPlaceholderProps): ReactNode => (
  <Box
    width='100%'
    height='100%'
    alignItems='center'
    justifyContent='center'
    background={backgroundColor}
  >
    <ImagePlaceholder color={color} size={size} />
  </Box>
)
