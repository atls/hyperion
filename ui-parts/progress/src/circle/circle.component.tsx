import type { PropsWithChildren } from 'react'
import type { FC }                from 'react'

import type { CircleProps }       from './circle.interfaces.js'

import { useState }               from 'react'
import React                      from 'react'

import { vars }                   from '@atls-ui-parts/theme'

import { getGradientId }          from './circle.utils.js'
import { getPathStyles }          from './circle.utils.js'
import { toArray }                from './circle.utils.js'

const Circle: FC<PropsWithChildren<CircleProps>> = ({
  trailWidth,
  strokeWeight = 6,
  gapDegree,
  gapPosition = 'top',
  trailColor = '#D9D9D9',
  strokeLinecap = 'square',
  strokeColor = '#1890ff',
  width = 100,
  height = 100,
  percent,
  children,
  ...props
}) => {
  // @ts-expect-error index
  const getThemeColor = (color: string): any => vars?.colors[color] || color
  // @ts-expect-error types mismatch
  const gradientId = getGradientId(strokeColor)
  const trailThemeColor = getThemeColor(trailColor)
  // @ts-expect-error types mismatch
  const strokeThemeColor = getThemeColor(strokeColor)

  const { pathString, pathStyle } = getPathStyles(
    0,
    100,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    trailThemeColor,
    strokeWeight,
    gapDegree,
    gapPosition
  )
  const [keysList, setKeysList] = useState<Array<number>>([])

  const getKey = (index: number): number => {
    if (keysList[index]) {
      return keysList[index]
    }

    const newKey = Math.random()
    setKeysList([...keysList, newKey])

    return newKey
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const gradients = toArray(strokeThemeColor).filter(
    (color) => Object.prototype.toString.call(color) === '[object Object]'
  )

  const getStrokeList = (): Array<React.JSX.Element> => {
    const percentList = toArray(percent)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const strokeColorList = toArray(strokeThemeColor)

    let stackPtg = 0
    let gradientIndex = -1

    return percentList.map((ptg, index) => {
      const key = getKey(index)
      const color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1]
      const gradient = Object.prototype.toString.call(color) === '[object Object]'
      gradientIndex = gradient ? gradientIndex + 1 : gradientIndex

      const { pathString: strokePathString, pathStyle: strokePathStyle } = getPathStyles(
        stackPtg,
        ptg,
        // @ts-expect-error string and number
        color,
        strokeWeight,
        gapDegree,
        gapPosition
      )

      // @ts-expect-error string and number
      stackPtg += ptg

      const strokeWidth = ptg === 0 ? 0 : strokeWeight
      const stroke = gradient ? `url(#${gradientId[gradientIndex]})` : undefined

      return (
        <path
          key={key}
          d={strokePathString}
          stroke={stroke}
          strokeLinecap={strokeLinecap}
          strokeWidth={strokeWidth}
          fillOpacity='0'
          style={strokePathStyle}
        />
      )
    })
  }

  return (
    <svg viewBox='0 0 100 100' width={width} height={height} {...props}>
      {gradients.map((gradient: any, index: number) => (
        <defs key={gradientId[index]}>
          <linearGradient id={`${gradientId[index]}`} x1='100%' y1='0%' x2='0%' y2='0%'>
            {Object.keys(gradient as never as Record<string, string>)
              .sort((a, b) => +a.replace('%', '') - +b.replace('%', ''))
              .map((key) => (
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                <stop key={key + gradient[key]} offset={key} stopColor={gradient[key]} />
              ))}
          </linearGradient>
        </defs>
      ))}
      <path
        d={pathString}
        stroke={trailThemeColor}
        strokeLinecap={strokeLinecap}
        strokeWidth={trailWidth || strokeWeight}
        fillOpacity='0'
        style={pathStyle}
      />
      {children}
      {getStrokeList().reverse()}
    </svg>
  )
}

export { Circle }
