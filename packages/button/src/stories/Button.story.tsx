import React        from 'react'

import { useTheme } from '@emotion/react'

import { Button }   from '../index'

type ExampleProps = {
  backgroundColor: 'red' | 'black' | 'yellow' | 'white'
  hoverBackgroundColor: 'red' | 'black' | 'yellow' | 'white'
  activeBackgroundColor: 'red' | 'black' | 'yellow' | 'white'
}

export const ExpampleButton = ({
  backgroundColor = 'white',
  hoverBackgroundColor = 'red',
  activeBackgroundColor = 'yellow',
}: ExampleProps) => {
  const theme = useTheme()

  return (
    <Button
      theme={theme}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      activeBackgroundColor={activeBackgroundColor}
    >
      Button
    </Button>
  )
}

export default {
  title: 'Button',
  component: ExpampleButton,
}
