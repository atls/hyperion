import { styleFn }               from 'styled-system'
import { ifProp }                from 'styled-tools'
import { switchProp }            from 'styled-tools'
import { prop }                  from 'styled-tools'

import { execAndSerialize }      from '@atls-ui-parts/styles'
import { combine }               from '@atls-ui-parts/styles'

import { NavigationShapeStyles } from './shape.interfaces'

const createBaseShapeStyles: styleFn = (
    width: number | string,
    borderWidth: number | string,
    borderRadius: number | string
  ) =>
  () => ({
    width,
    borderWidth,
    borderRadius,
  })

const createFillStyles: styleFn = (height: number) =>
  ifProp(
    'fill',
    () => ({
      top: 0,
      height: '100%',
    }),
    {
      top: '50%',
      marginTop: height / 2,
      height,
    }
  )

const createAttachStyles: styleFn = (offset: number | string) =>
  switchProp(prop('attach'), () => ({
    prev: {
      left: offset || 0,
    },
    next: {
      right: offset || 0,
    },
  }))

export const createNavigationShapeStyles = ({
  width,
  height,
  offset,
  borderWidth = 0,
  borderRadius = 0,
}: NavigationShapeStyles): styleFn =>
  execAndSerialize(
    combine(
      createBaseShapeStyles(width, borderWidth, borderRadius),
      createFillStyles(height),
      createAttachStyles(offset)
    )
  )
