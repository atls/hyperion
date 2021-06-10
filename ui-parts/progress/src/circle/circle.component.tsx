import React, { FunctionComponent, useState }    from 'react'

import { CircleProps }                           from './circle.interfaces'
import { getGradientId, getPathStyles, toArray } from './utils'

const Circle: FunctionComponent<CircleProps> = ({
  strokeWidth = 6,
  trailWidth,
  gapDegree,
  gapPosition = 'top',
  trailColor = '#D9D9D9',
  strokeLinecap = 'square',
  strokeColor = '#1890ff',
  width = 100,
  height = 100,
  percent,
  ...props
}) => {
  const gradientId = getGradientId(strokeColor)
  const { pathString, pathStyle } = getPathStyles(
    0,
    100,
    trailColor,
    strokeWidth,
    gapDegree,
    gapPosition
  )
  const [keysList, setKeysList] = useState<number[]>([])

  const getKey = (index) => {
    if (keysList[index]) {
      return keysList[index]
    }

    const newKey = Math.random()
    setKeysList([...keysList, newKey])

    return newKey
  }

  const gradients = toArray(strokeColor).filter(
    (color) => Object.prototype.toString.call(color) === '[object Object]'
  )

  const getStrokeList = () => {
    const percentList = toArray(percent)
    const strokeColorList = toArray(strokeColor)

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
        color,
        strokeWidth,
        gapDegree,
        gapPosition
      )

      stackPtg += ptg

      return (
        <path
          key={key}
          d={strokePathString}
          stroke={gradient ? `url(#${gradientId[gradientIndex]})` : undefined}
          strokeLinecap={strokeLinecap}
          strokeWidth={ptg === 0 ? 0 : strokeWidth}
          fillOpacity='0'
          style={strokePathStyle}
        />
      )
    })
  }

  return (
    <svg viewBox='0 0 100 100' width={width} height={height} {...props}>
      {gradients.map((gradient, index) => (
        <defs key={gradientId[index]}>
          <linearGradient id={`${gradientId[index]}`} x1='100%' y1='0%' x2='0%' y2='0%'>
            {Object.keys(gradient)
              .sort((a, b) => +a.replace('%', '') - +b.replace('%', ''))
              .map((key) => (
                <stop key={key + gradient[key]} offset={key} stopColor={gradient[key]} />
              ))}
          </linearGradient>
        </defs>
      ))}
      <path
        d={pathString}
        stroke={trailColor}
        strokeLinecap={strokeLinecap}
        strokeWidth={trailWidth || strokeWidth}
        fillOpacity='0'
        style={pathStyle}
      />
      {getStrokeList().reverse()}
    </svg>
  )
}

export { Circle }
