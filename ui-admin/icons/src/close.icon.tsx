/* eslint-disable */
import React               from 'react'

import { Icon, IconProps } from '@admui/icon'

export const CloseIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    height='1em'
    width='1em'
    focusable='false'
    role='img'
    fill='currentColor'
    className='sc-AxjAm dQgIel'
    {...props}
  >
    <title>{'Close icon'}</title>
    <path fill='none' d='M0 0h24v24H0z' />
    <path d='M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z' />
  </Icon>
)
CloseIcon.displayName = 'CloseIcon'
