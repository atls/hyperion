import assert            from 'node:assert/strict'
import { readFileSync }  from 'node:fs'
import { createRequire } from 'node:module'
import path              from 'node:path'

import { transform }     from '@babel/standalone'

export const processFile = (filePath: string): object => {
  const filePathTsExt = filePath.replace('.js', '.ts')

  // eslint-disable-next-line n/no-sync
  const file = readFileSync(filePathTsExt).toString('utf-8')

  const filename = path.basename(filePathTsExt)

  const { code } = transform(file, {
    filename,
    presets: ['env', 'typescript'],
    plugins: ['transform-modules-commonjs'],
  })

  assert.ok(code, `Could not process the code with path ${filePath}. Please try again`)

  // eslint-disable-next-line @next/next/no-assign-module-variable
  const module = { exports: {} }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { exports } = module
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const require = createRequire(filePath)

  // eslint-disable-next-line no-eval, security/detect-eval-with-expression
  eval(`
    (function(exports, module, require) {
      ${code}
    })(exports, module, require);
  `)

  return module.exports
}
