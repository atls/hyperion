import styled                      from '@emotion/styled'

import React                       from 'react'
import { FC }                      from 'react'
import { useTransform }            from 'framer-motion'
import { useMemo }                 from 'react'

import { ParallaxBoxElement }      from './parallax-box.element'
import { ParallaxBoxProps }        from './parallax-box.interfaces'
import { ParallaxBoxElementProps } from './parallax-box.interfaces'
import { useParallax }             from '../context'

export const BaseParallaxBox = styled(ParallaxBoxElement)<ParallaxBoxElementProps>()

const easingFunctions = {
  easeInOut: (x: number): number => -(Math.cos(Math.PI * x) - 1) / 2,
  linear: (x: number): number => x,
}

const GetTransform = (scrollY, range, outputRange, ease) =>
  useTransform(scrollY, range, outputRange, { ease: easingFunctions[ease] })

const GetTransformDisplay = (display) =>
  useTransform(display, (value: number) => (value > 0 ? 'flex' : 'none'))

export const ParallaxBox: FC<ParallaxBoxProps> = ({
  children,
  inputRange,
  animations = {},
  pageNumber = 0,
  ease = 'easeInOut',
  heightMultiplier = 1,
  ...props
}) => {
  const [scrollY, windowHeight] = useParallax()
  const range = useMemo(
    () =>
      inputRange.map(
        (item: number) =>
          item * heightMultiplier * Number(windowHeight) + Number(windowHeight) * pageNumber
      ),
    [windowHeight, inputRange, pageNumber, heightMultiplier]
  )
  const animatedStyles: any = useMemo(() => {
    const values = {}
    Object.keys(animations).forEach((key: string) => {
      values[key] = GetTransform(scrollY, range, animations[key], ease)
    })

    return values
  }, [animations, scrollY, range, ease])

  const displayStyle = useMemo(() => {
    if (!animatedStyles?.display) return {}

    return {
      display: GetTransformDisplay(animatedStyles.display),
    }
  }, [animatedStyles])

  return (
    <BaseParallaxBox style={{ ...animatedStyles, ...displayStyle }} {...props}>
      {children}
    </BaseParallaxBox>
  )
}

ParallaxBox.defaultProps = {
  display: 'flex',
}
