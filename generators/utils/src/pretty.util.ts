import * as prettierPlugin from '@atls/prettier-plugin'

import prettierConfig      from '@atls/config-prettier'

import parserBabel         from 'prettier/parser-babel'
import parserTypescript    from 'prettier/parser-typescript'
import { format }          from 'prettier/standalone'

const pretty = (string) =>
  format(string, {
    ...prettierConfig,
    parser: 'babel',
    plugins: [parserTypescript, parserBabel, prettierPlugin],
  })

export { pretty }
