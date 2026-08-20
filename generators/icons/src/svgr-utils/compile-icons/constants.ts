import type { Config }           from '@svgr/core'

import type { SvgrPlugin }       from './interfaces.js'
import type { SvgrPluginModule } from './interfaces.js'

import { createRequire }         from 'node:module'

import { svgrTemplate }          from './template.js'

const svgrCorePackageName = '@svgr/core/package.json'

const svgoPluginName = '@svgr/plugin-svgo'

const jsxPluginName = '@svgr/plugin-jsx'

const prettierPluginName = '@svgr/plugin-prettier'

const require = createRequire(import.meta.url)

const svgrRequire = createRequire(require.resolve(svgrCorePackageName))

const loadSvgrPlugin = (pluginName: string): SvgrPlugin => {
  const plugin = svgrRequire(pluginName) as SvgrPlugin | SvgrPluginModule

  if (typeof plugin === 'object' && 'default' in plugin && plugin.default) {
    return plugin.default
  }

  return plugin as SvgrPlugin
}

const svgrTransformPlugins = [
  loadSvgrPlugin(svgoPluginName),
  loadSvgrPlugin(jsxPluginName),
  loadSvgrPlugin(prettierPluginName),
]

export const MASK_ID_PATTERN = /mask0/g
export const PROPS_SPREAD_FROM = '...props'
export const PROPS_SPREAD_TO = '...otherProps'

export const FIFTY_PLUS_PATTERN = '50+'
export const FIFTY_PLUS_REPLACEMENT = 'FiftyPlus'

export const svgrTransformConfig: Config = {
  icon: true,
  typescript: true,
  template: svgrTemplate,
  plugins: svgrTransformPlugins,
  svgProps: {
    className: `{clsx(className, String(otherProps.className || ''))}`,
    style: '{iconStyle}',
  },
}
