import { ReactNode }     from 'react'
import { LayoutProps }   from 'styled-system'
import { FlexboxProps }  from 'styled-system'
import { PositionProps } from 'styled-system'
import { SpaceProps }    from 'styled-system'

export type ParallaxBoxElementProps = FlexboxProps & LayoutProps & PositionProps & SpaceProps

export type ParallaxEaseType = 'linear' | 'easeInOut'
export type ParallaxAnimationsType = {
  [key: string]: Array<number | string>
}

export interface BaseParallaxBoxProps {
  children: ReactNode
  inputRange: Array<number>
  animations?: ParallaxAnimationsType
  pageNumber?: number
  ease?: ParallaxEaseType
}

export type ParallaxBoxProps = BaseParallaxBoxProps & ParallaxBoxElementProps
