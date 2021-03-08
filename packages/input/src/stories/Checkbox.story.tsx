import React        from 'react'

import { useTheme } from '@emotion/react'

import { Checkbox } from '../Checkbox'

export const ExampleCheckbox = () => {
  const theme = useTheme()

  return <Checkbox theme={theme}>Check this</Checkbox>
}

export default {
  title: 'Input',
  component: ExampleCheckbox,
}
