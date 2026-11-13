import type { CircleProgressShape }         from './interfaces.js'
import type { ResolvedCircleProgressShape } from './interfaces.js'

import { spacing }                          from '@atls-ui/theme/tokens'

import { PAINT_PIXEL_SIZE }                 from '../../constants.js'
import { STROKE_CENTER_RATIO }              from '../../constants.js'
import { DEFAULT_INDICATOR_OVERLAP }        from '../../indicator/styles/shape/constants.js'
import { PERCENTAGE_SCALE }                 from './constants.js'
import { SVG_DIAGONAL_RATIO }               from './constants.js'

const percentage = (value: string): number | undefined => {
  const normalized = value.trim()
  if (!normalized.endsWith('%')) return undefined
  const number = Number(normalized.slice(0, -1))
  return Number.isFinite(number) ? number / PERCENTAGE_SCALE : undefined
}

const length = (value: number | string): string =>
  typeof value === 'number' || value.trim() === '0' ? `${Number(value)}px` : value

export const resolveShape = (shape: CircleProgressShape): ResolvedCircleProgressShape => {
  const { overlap = DEFAULT_INDICATOR_OVERLAP } = shape.indicator
  const rawStroke = length(shape.indicator.strokeWidth)
  const strokeRatio = percentage(rawStroke)
  const strokeWidth =
    strokeRatio === undefined
      ? rawStroke
      : `calc(hypot(100cqw, 100cqh) * ${strokeRatio * SVG_DIAGONAL_RATIO})`
  const containerPadding = shape.container?.padding
  const padding = length(
    containerPadding ??
      (strokeRatio === undefined ? `calc(${rawStroke} / 2)` : spacing.component.none)
  )
  const offset = `calc(${strokeWidth} * (${STROKE_CENTER_RATIO} - ${overlap}))`
  const inset = `calc(${padding} - ${offset})`
  const paintPadding = `calc(${strokeWidth} + ${PAINT_PIXEL_SIZE})`
  const width = `calc(100cqw - 2 * ${inset})`
  const height = `calc(100cqh - 2 * ${inset})`
  const radius = `min(max(0px, calc(${length(shape.box.radius)} + ${offset})), ${width} / 2, ${height} / 2)`
  return {
    padding,
    paintPadding,
    strokeWidth,
    contour: {
      x: `calc(${inset} + ${paintPadding})`,
      y: `calc(${inset} + ${paintPadding})`,
      width,
      height,
      rx: radius,
      ry: radius,
    },
  }
}
