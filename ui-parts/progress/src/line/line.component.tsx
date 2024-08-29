import type { FC }               from 'react'

import type { ProgressGradient } from '../progress.interfaces.js'
import type { LineProps }        from './line.interfaces.js'

import { useState }              from 'react'
import React                     from 'react'

import { vars }                  from '@atls-ui-parts/theme'

import { LineContainer }         from '../line-container/index.js'
import { LinePercent }           from '../line-percent/index.js'

export const sortGradient = (gradients: Record<string, string>): string => {
  let tempArr: Array<{ key: number; value: string }> = []
  Object.keys(gradients).forEach((key) => {
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

export const handleGradient = (
  strokeColor: ProgressGradient & { direction?: string }
): Record<'backgroundImage', string> => {
  const { from = '#1890ff', to = '#1890ff', direction = 'to right', ...rest } = strokeColor
  if (Object.keys(rest).length !== 0) {
    const sortedGradients = sortGradient(rest)
    return { backgroundImage: `linear-gradient(${direction}, ${sortedGradients})` }
  }
  return { backgroundImage: `linear-gradient(${direction}, ${from}, ${to})` }
}

export const Line: FC<LineProps> = ({
  percent,
  strokeColor = '$blueProtective',
  strokeLinecap,
  trailLinecap,
  trailColor,
  strokeWeight = 8,
}) => {
  const getThemeColor = (color: Array<ProgressGradient | string> | string): any =>
    vars?.colors[color as keyof typeof vars.colors] || color

  const percentList = Array.isArray(percent) ? percent : [percent]
  const strokeColorList = Array.isArray(strokeColor)
    ? getThemeColor(strokeColor)
    : // @ts-expect-error types mismatch
      [getThemeColor(strokeColor)]
  const [keysList, setKeysList] = useState<Array<number>>([])

  const getKey = (index: number): number => {
    if (keysList[index]) {
      return keysList[index]
    }

    const newKey = Math.random()
    setKeysList([...keysList, newKey])

    return newKey
  }

  return (
    <LineContainer
      trailLinecap={trailLinecap}
      height={`${strokeWeight}px`}
      backgroundColor={trailColor}
    >
      {percentList
        .map((item, index) => {
          let backgroundProps = {}

          if (strokeColorList[index] && typeof strokeColorList[index] !== 'string') {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            backgroundProps = handleGradient(strokeColorList[index])
          } else if (
            !strokeColorList[index] &&
            typeof strokeColorList[strokeColorList.length - 1] !== 'string'
          ) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
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
