import React, { FunctionComponent, useState } from 'react'

import { LineContainer }                      from '../line-container'
import { LinePercent }                        from '../line-percent'
import { LineProps }                          from './line.interfaces'

export const sortGradient = gradients => {
  let tempArr: any[] = []
  Object.keys(gradients).forEach(key => {
    const formattedKey = parseFloat(key.replace(/%/g, ''))
    if (!Number.isNaN(formattedKey)) {
      tempArr.push({
        key: formattedKey,
        value: gradients[key],
      })
    }
  })
  tempArr = tempArr.sort((a, b) => a.key - b.key)
  return tempArr.map(({ key, value }) => `${value} ${key}%`).join(', ')
}

export const handleGradient = strokeColor => {
  const { from = '#1890ff', to = '#1890ff', direction = 'to right', ...rest } = strokeColor
  if (Object.keys(rest).length !== 0) {
    const sortedGradients = sortGradient(rest)
    return { backgroundImage: `linear-gradient(${direction}, ${sortedGradients})` }
  }
  return { backgroundImage: `linear-gradient(${direction}, ${from}, ${to})` }
}

const Line: FunctionComponent<LineProps> = ({
  percent,
  strokeColor = '#1890ff',
  strokeLinecap,
  trailLinecap,
  trailColor,
  strokeWidth = 8,
}) => {
  const percentList = Array.isArray(percent) ? percent : [percent]
  const strokeColorList = Array.isArray(strokeColor) ? strokeColor : [strokeColor]
  const [keysList, setKeysList] = useState([])

  const getKey = index => {
    if (keysList[index]) {
      return keysList[index]
    }

    const newKey = Math.random()
    setKeysList([...keysList, newKey])

    return newKey
  }

  return (
    <LineContainer trailLinecap={trailLinecap} height={strokeWidth} backgroundColor={trailColor}>
      {percentList
        .map((item, index) => {
          let backgroundProps = {}

          if (strokeColorList[index] && typeof strokeColorList[index] !== 'string') {
            backgroundProps = handleGradient(strokeColorList[index])
          } else if (
            !strokeColorList[index] &&
            typeof strokeColorList[strokeColorList.length - 1] !== 'string'
          ) {
            backgroundProps = handleGradient(strokeColorList[strokeColorList.length - 1])
          } else {
            backgroundProps = {
              background: strokeColorList[index] || strokeColorList[strokeColorList.length - 1],
            }
          }
          return (
            <LinePercent
              key={getKey(index)}
              style={{ width: `${item}%` }}
              strokeLinecap={strokeLinecap}
              {...backgroundProps}
            />
          )
        })
        .reverse()}
    </LineContainer>
  )
}

export { Line }
