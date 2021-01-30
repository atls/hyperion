import React        from 'react'

import { Textarea } from '../index'

type ExampleProps = {
  placeholder?: string
  border: string
  offset?: string
  width?: string
  height?: string
  minHeight?: string
  minWidth?: string
}

export const ExampleTextArea = ({
  placeholder,
  border = '1px solid black',
  offset,
  width,
  height,
  minWidth,
  minHeight,
}: ExampleProps) => {
  return (
    <Textarea
      placeholder={placeholder}
      border={border}
      offset={offset}
      width={width}
      height={height}
      minWidth={minWidth}
      minHeight={minHeight}
    />
  )
}

export default {
  title: 'Input',
  component: ExampleTextArea,
}
