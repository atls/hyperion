import type { HTMLAttributes }    from 'react'
import type { ImgHTMLAttributes } from 'react'
import type { ReactNode }         from 'react'
import type { Ref }               from 'react'

import type { ImageAppearance }   from './styles/appearance/interfaces.js'
import type { ImageShape }        from './styles/shape/interfaces.js'
export interface ImageProps extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'children' | 'dangerouslySetInnerHTML'
> {
  alt: string
  ref?: Ref<HTMLImageElement>
  shape?: ImageShape
  appearance?: ImageAppearance | 'default'
  isLoading?: boolean
  fallback?: ReactNode
  errorFallback?: ReactNode
  errorDescription?: string
  loadingIndicator?: ReactNode
  containerProps?: Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'dangerouslySetInnerHTML'>
}

export interface ImageLoadResult {
  source: string
  state: 'error' | 'loaded'
}
