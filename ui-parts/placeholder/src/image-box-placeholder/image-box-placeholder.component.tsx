import type { FC }                       from 'react'

import type { ImageBoxPlaceholderProps } from './image-box-placeholder.interfaces.js'

import React                             from 'react'

import { Box }                           from '@atls-ui-parts/layout'

import { ImagePlaceholder }              from '../image-placeholder/index.js'

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
