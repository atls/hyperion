import React                from 'react'

import { Box }              from '@atls-ui-proto/layout'

import { ImagePlaceholder } from '../image'

export const ImageBoxPlaceholder = ({
  size = 32,
  color = '#A0A4B3',
  backgroundColor = '#DADEED',
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
