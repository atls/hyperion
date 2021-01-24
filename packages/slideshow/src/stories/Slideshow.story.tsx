import React             from 'react'
import { ThemeProvider } from '@emotion/react'

import { Slideshow }     from '../index'

const defaultTheme = {
  colors: {
    lightGray: 'gray',
    green: 'green',
  },
}

export const ExampleSlideshow = ({ time, transition = '.5s', controlsType }) => (
  <Slideshow time={time} transition={transition} controlsType={controlsType}>
    <h1>Child 1</h1>
    <h1>Child 2</h1>
    <h1>Child 3</h1>
  </Slideshow>
)

export default {
  title: 'Slideshow',
  component: Slideshow,
  decorators: [
    Story => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
