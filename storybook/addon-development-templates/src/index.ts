import { ADDON_ID } from './addon-development-templates.contants'
import { PANEL_ID } from './addon-development-templates.contants'

export { ADDON_ID, PANEL_ID }

declare const module: any

if (module && module.hot && module.hot.decline) {
  module.hot.decline()
}
