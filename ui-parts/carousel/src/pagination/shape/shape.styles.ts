import { styleFn }               from 'styled-system'
import { ifProp }                from 'styled-tools'

import { execAndSerialize }      from '@atls-ui-parts/styles'
import { combine }               from '@atls-ui-parts/styles'

import { PaginationShapeStyles } from './shape.interfaces'

const createBaseShapeStyles: styleFn =
  (
    size: number | string,
    margin: number | string,
    borderWidth: number | string,
    borderRadius: number | string
  ) =>
  () => ({ width: size, height: size, margin, borderWidth, borderRadius })

const createShapeActiveStyles: styleFn = (
  activeSize: number | string,
  activeMargin: number | string,
  activeBorderWidth: number | string,
  activeBorderRadius: number | string
) =>
  ifProp('active', () => ({
    height: activeSize,
    width: activeSize,
    margin: activeMargin,
    borderWidth: activeBorderWidth,
    borderRadius: activeBorderRadius,
  }))

export const createPaginationShapeStyles = ({
  size,
  margin = 10,
  borderWidth = 0,
  borderRadius = 0,
  activeSize,
  activeMargin,
  activeBorderWidth,
  activeBorderRadius,
}: PaginationShapeStyles): styleFn =>
  execAndSerialize(
    combine(
      createBaseShapeStyles(size, margin, borderWidth, borderRadius),
      createShapeActiveStyles(
        activeSize || size,
        activeMargin || margin,
        activeBorderWidth || borderWidth,
        activeBorderRadius || borderRadius
      )
    )
  )
