import type { PropsWithChildren } from 'react'
import type { Ref }               from 'react'
import type { ImgHTMLAttributes } from 'react'

export interface ImageProps extends PropsWithChildren, ImgHTMLAttributes<HTMLImageElement> {
  ref?: Ref<HTMLImageElement>
}
