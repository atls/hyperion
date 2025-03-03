/* eslint-disable n/no-sync */
import { transform }    from '@babel/standalone'
import { Command }      from 'commander'
import { readFileSync } from 'fs'
import { lstatSync }    from 'fs'
import { existsSync }   from 'fs'
import { mkdirSync }    from 'fs'
import { join }         from 'path'
import assert           from 'assert'

import { svgrBuild }    from './utils/index.js'

const command = new Command()
  .name('Icons generator')
  .argument('path <string>', 'Path to save icons')
  .option('-i, --icons path <string>', 'Path to icons dir')
  .option('-r, --replacements path <string>', 'Path to replacements file')
  .action(async (path: string, options: Record<string, string>) => {
    assert.ok(options.icons, 'Icons dir path is required')

    const iconsPath = join(process.cwd(), options.icons)
    const genPath = join(process.cwd(), path)

    if (!existsSync(genPath)) {
      mkdirSync(genPath)
    }

    assert.ok(lstatSync(genPath).isDirectory(), 'Path to save icons should point to a directory.')
    assert.ok(lstatSync(iconsPath).isDirectory(), 'Icons path should point to a directory.')

    let replacements = {}

    if (options.replacements) {
      const replacementsFile = readFileSync(join(process.cwd(), options.replacements)).toString(
        'utf-8'
      )
      const { code } = transform(replacementsFile, { presets: ['env'] })

      if (!code) throw Error('Could not read the file')

      // eslint-disable-next-line no-eval, security/detect-eval-with-expression
      replacements = eval(code)
    }

    await svgrBuild(iconsPath, genPath, replacements)

    // eslint-disable-next-line no-console
    console.log(`Generated into ${genPath}`)
  })

command.parse()
