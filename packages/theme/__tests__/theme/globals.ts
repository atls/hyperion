import path from 'path'
import { fontFaces } from './theme'
import { injectGlobalStyles as injectGlobal } from '../../src'

export const injectGlobalStyles = (html = {}, body = {}) => {
    injectGlobal(path.resolve(__dirname, "../fonts"), fontFaces, html, body)
}
