import React            from 'react'
import { FC }           from 'react'

import { Box }          from '@atls-ui-parts/layout'

import { DividerProps } from './divider.interface'

const Divider: FC<DividerProps> = ({ weight, ...props }) => (
  // @ts-ignore
  <Box width='100%' height={weight} {...props} />
)

export { Divider }
