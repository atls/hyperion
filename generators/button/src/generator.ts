import { transform }                      from '@babel/standalone'

import assert                             from 'assert'
import { Command }                        from 'commander'
import { readFileSync }                   from 'fs'
import { join }                           from 'path'

import { ButtonAppearanceStyleGenerator } from './style-generators/index.js'

const command = new Command()
  .name('Button styles generator')
  .argument('path <string>', 'Path to save the styles')
  .option('-t, --theme path <string>', 'Path to colors file')
  .action((path, options) => {
    assert.ok(options.theme, 'Theme colors path is required')

    const colorsFile = readFileSync(join(process.cwd(), options.theme)).toString('utf-8')
    const { code } = transform(colorsFile, { presets: ['env'] })

    if (!code) throw Error('Could not read the file')

    // eslint-disable-next-line no-eval
    const colors = eval(code)

    const generator = new ButtonAppearanceStyleGenerator(colors)

    const genPath = join(process.cwd(), path)
    generator.generateFile(genPath)

    // eslint-disable-next-line no-console
    console.log(`Generated into ${genPath}`)
  })

command.parse()
