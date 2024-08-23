import { HTMLAttributes }     from 'react'

import { UseCarouselOptions } from './hooks/index.js'

export interface CarouselProps extends HTMLAttributes<HTMLDivElement>, UseCarouselOptions {}
