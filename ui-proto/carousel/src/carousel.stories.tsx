import React                             from 'react'

import { Carousel as CarouselComponent } from './carousel.component'

export default {
  title: 'Components/Carousel',
}

export const Carousel = (props) => (
  <div style={{ width: 500, height: 400 }}>
    <CarouselComponent {...props} />
  </div>
)

Carousel.args = {
  children: [1, 2, 3, 4],
}
