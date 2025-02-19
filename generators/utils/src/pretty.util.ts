import * as prettierPlugin from '@atls/prettier-plugin'
import atlsPrettierConfig  from '@atls/config-prettier'
import parserBabel         from 'prettier/parser-babel.js'
import parserTypescript    from 'prettier/parser-typescript.js'
import standalone          from 'prettier/standalone.js'

const prettierConfig =
  'default' in atlsPrettierConfig ? atlsPrettierConfig.default : atlsPrettierConfig

export const pretty = (string: string): string =>
  // @ts-expect-error correct options types
  standalone.format(string, {
    ...prettierConfig,
    parser: 'babel',
    plugins: [parserTypescript, parserBabel, prettierPlugin],
  })
