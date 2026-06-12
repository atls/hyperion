import type { ReactNode }        from 'react'
import type { CSSProperties }    from 'react'

import type { ProgressGradient } from '../progress.interfaces.js'
import type { LineProps }        from './line.interfaces.js'

import { useState }              from 'react'

import { vars }                  from '@atls-ui-parts/theme'

import { LineContainer }         from '../line-container/index.js'
import { LinePercent }           from '../line-percent/index.js'

type LineBackgroundProps = Pick<CSSProperties, 'background' | 'backgroundImage'>

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

export const Line = ({
  percent,
  strokeColor = '$blueProtective',
  strokeLinecap,
  trailLinecap,
  trailColor,
  strokeWeight = 8,
}: LineProps): ReactNode => {
  const colors = vars.colors as Record<string, string | undefined>
  const getThemeColor = (color: ProgressGradient | string): ProgressGradient | string =>
    typeof color === 'string' ? (colors[color] ?? color) : color

  const percentList = Array.isArray(percent) ? percent : [percent]
  const strokeColorList = Array.isArray(strokeColor)
    ? strokeColor.map((color) => getThemeColor(color))
    : [getThemeColor(strokeColor)]
  const [keysList, setKeysList] = useState<Array<number>>([])

  const getBackgroundProps = (index: number): LineBackgroundProps => {
    const currentColor = strokeColorList[index]
    const fallbackColor = strokeColorList[strokeColorList.length - 1]

    if (currentColor && typeof currentColor !== 'string') {
      return handleGradient(currentColor)
    }

    if (!currentColor && fallbackColor && typeof fallbackColor !== 'string') {
      return handleGradient(fallbackColor)
    }

    let background: string | undefined

    if (typeof currentColor === 'string') {
      background = currentColor
    } else if (typeof fallbackColor === 'string') {
      background = fallbackColor
    }

    return { background }
  }

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
          const backgroundProps = getBackgroundProps(index)

          return (
            <LinePercent
              key={getKey(index)}
              style={{ width: `${item}%`, ...backgroundProps }}
              strokeLinecap={strokeLinecap}
            />
          )
        })
        .reverse()}
    </LineContainer>
  )
}
