import React                        from 'react'
import { FC }                       from 'react'

import { Box }                      from '@atls-ui-parts/layout'

import { ImagePlaceholder }         from '../image-placeholder/index.js'
import { ImageBoxPlaceholderProps } from './image-box-placeholder.interfaces.js'

export const ImageBoxPlaceholder: FC<ImageBoxPlaceholderProps> = ({
  size = 32,
  color = '#A0A4B3',
  backgroundColor = '$lightPurple',
}) => (
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
