import type { HTMLAttributes }     from 'react'

import type { UseCarouselOptions } from './hooks/index.js'

export interface CarouselProps extends HTMLAttributes<HTMLDivElement>, UseCarouselOptions {}
