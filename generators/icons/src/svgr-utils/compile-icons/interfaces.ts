import type { Config } from '@svgr/core'

export type SvgrPlugin = NonNullable<Config['plugins']>[number]

export interface SvgrPluginModule {
  default?: SvgrPlugin
}
