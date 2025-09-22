import type { GetSvgColorsOptions } from '../../svgr-utils/index.js'

const colorAttributes = new Set<string>([
  'fill',
  'stroke',
  'color',
  'stop-color',
  'flood-color',
  'lighting-color',
  'solid-color',
  'background-color',
  'text-decoration-color',
  'caret-color',
  'outline-color',
  'border-color',
])

const ignoredColorAttributeValues = new Set<string>([
  'none',
  'currentcolor',
  'currentColor',
  'inherit',
  'transparent',
  'initial',
  'unset',
])

export const getSvgColorsOptions: GetSvgColorsOptions = {
  colorAttributes,
  ignoredColorAttributeValues,
}
