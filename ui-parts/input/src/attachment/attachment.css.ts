import { style }                  from '@vanilla-extract/css'

import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

export const attachmentBaseStyles = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  lineHeight: 0,
  zIndex: 2,
})

const attachmentProperties = defineProperties({
  dynamicProperties: {
    color: true,
    paddingRight: true,
    paddingLeft: true,
    fontSize: true,
    fontWeight: true,
    fontFamily: true,
  },
  shorthands: {
    fontColor: ['color'],
  },
})

export const attachmentSprinkles = createRainbowSprinkles(attachmentProperties)

export type AttachmentSprinkles = Parameters<typeof attachmentSprinkles>[0]
