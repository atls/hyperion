import assert           from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path             from 'node:path'

import { transform }    from '@babel/standalone'

export const processFile = (filePath: string): object => {
  // eslint-disable-next-line n/no-sync
  const file = readFileSync(filePath.replace('.js', '.ts')).toString('utf-8')

  const { code } = transform(file, {
    presets: ['env'],
    plugins: ['transform-modules-commonjs'],
  })

  assert.ok(code, `Could not process the code with path ${filePath}. Please try again`)

  // eslint-disable-next-line @next/next/no-assign-module-variable
  const module = { exports: {} }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { exports } = module
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const require = (modulePath: string): object => {
    const absolutePath = path.resolve(path.dirname(filePath), modulePath)
    return processFile(absolutePath)
  }

  // eslint-disable-next-line no-eval, security/detect-eval-with-expression
  eval(`
    (function(exports, module, require) {
      ${code}
    })(exports, module, require);
  `)

  return module.exports
}
