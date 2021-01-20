import React         from 'react'

import { Slideshow } from '../Slideshow'

export default {
  title: 'Slideshow',
}

export const Size = () => {
  return (
    <Slideshow>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Slideshow>
  )
}

Size.story = {
  name: 'Слайдшоу',
}
