import path                                   from 'path'

import { injectGlobalStyles as injectGlobal } from '../../src'
import { fontFaces }                          from './theme'

export const injectGlobalStyles = (html = {}, body = {}) => {
  injectGlobal(path.resolve(__dirname, '../fonts'), fontFaces, html, body)
}
