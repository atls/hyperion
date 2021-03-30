import path                                   from 'path'

import { injectGlobalStyles as injectGlobal } from '@atlantis-lab/theme'

import { fontFaces }                          from './theme'

export const injectGlobalStyles = (html = {}, body = {}) => {
  injectGlobal(path.resolve('./separator/fonts'), fontFaces, html, body)
}
