import path              from 'node:path'
import { fileURLToPath } from 'node:url'

import { Plop }          from 'plop'
import { run }           from 'plop'
import minimist          from 'minimist'

const argv = minimist(process.argv.slice(2))

const dirname = path.dirname(fileURLToPath(import.meta.url))

Plop.prepare(
  {
    cwd: argv.cwd,
    configPath: path.join(dirname, 'config.js'),
    preload: argv.preload || [],
    completion: argv.completion,
  },
  (env) => {
    /** @see https://plopjs.com/documentation/#wrapping-plop */
    // @ts-expect-error run type definition is not correct
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    Plop.execute(env, run)
  }
)
