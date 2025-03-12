import type { Config }    from 'prettier'

import atlsPrettierConfig from '@atls/config-prettier'
import prettierPlugin     from '@atls/prettier-plugin'
import parserBabel        from 'prettier/parser-babel.js'
import parserTypescript   from 'prettier/parser-typescript.js'
import pluginEstree       from 'prettier/plugins/estree.js'
import standalone         from 'prettier/standalone.js'

const prettierConfig =
  'default' in atlsPrettierConfig ? (atlsPrettierConfig.default as Config) : atlsPrettierConfig

export const pretty = async (string: string): Promise<string> =>
  standalone.format(string, {
    ...prettierConfig,
    parser: 'typescript',
    plugins: [parserBabel, parserTypescript, pluginEstree, prettierPlugin],
  })
