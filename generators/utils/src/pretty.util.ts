import * as prettierPlugin from '@atls/prettier-plugin'
import prettierConfig      from '@atls/config-prettier'
import { format }          from 'prettier/standalone'
import parserBabel         from 'prettier/parser-babel'
import parserTypescript    from 'prettier/parser-typescript'

const pretty = (string: string): string =>
  // @ts-expect-error correct options types
  format(string, {
    ...prettierConfig,
    parser: 'babel',
    plugins: [parserTypescript, parserBabel, prettierPlugin],
  })

export { pretty }
