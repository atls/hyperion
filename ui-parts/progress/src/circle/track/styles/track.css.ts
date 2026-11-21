import type { SVGAttributes }  from 'react'

import { createVar }           from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { PAINT_PIXEL_SIZE }    from '../../constants.js'
import { STROKE_CENTER_RATIO } from '../../constants.js'
import { radiusInput }         from '../../box/styles/shape/variables.css.js'
import { boxRadius }           from '../../box/styles/shape/variables.css.js'
import { indicatorOverlap }    from './variables.css.js'
import { strokeWidth }         from './variables.css.js'

const strokeOffset = createVar()
const paintPadding = `calc(${strokeWidth} + ${PAINT_PIXEL_SIZE})`

const geometry: Pick<
  SVGAttributes<SVGRectElement>,
  'height' | 'rx' | 'ry' | 'width' | 'x' | 'y'
> = {
  x: `calc(${paintPadding} - ${strokeOffset})`,
  y: `calc(${paintPadding} - ${strokeOffset})`,
  width: `calc(100cqw + 2 * ${strokeOffset})`,
  height: `calc(100cqh + 2 * ${strokeOffset})`,
  rx: `max(0px, calc(min(${boxRadius}, 50cqw) + ${strokeOffset}))`,
  ry: `max(0px, calc(min(${boxRadius}, 50cqh) + ${strokeOffset}))`,
}

export const lineStyles = style({ ...geometry, fill: 'none', strokeWidth })

export const trackStyles = style({
  gridArea: '1 / 1',
  position: 'relative',
  containerType: 'size',
  minWidth: 0,
  minHeight: 0,
  pointerEvents: 'none',
  vars: { [strokeOffset]: `calc(${strokeWidth} * (${STROKE_CENTER_RATIO} - ${indicatorOverlap}))` },
})
export const layerStyles = style({
  position: 'absolute',
  display: 'block',
  overflow: 'visible',
  inset: `calc(0px - ${paintPadding})`,
  vars: { [boxRadius]: radiusInput },
})
