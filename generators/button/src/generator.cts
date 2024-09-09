import { transform }                      from '@babel/standalone'
import { Command }                        from 'commander'
import { readFileSync }                   from 'fs'
import { join }                           from 'path'
import assert                             from 'assert'

const command = new Command()
  .name('Button styles generator')
  .argument('path <string>', 'Path to save the styles')
  .option('-t, --theme path <string>', 'Path to colors file')
  .action(async (path: string, options: Record<string, string>) => {
    assert.ok(options.theme, 'Theme colors path is required')

    const colorsFile = readFileSync(join(process.cwd(), options.theme)).toString('utf-8')
    const { code } = transform(colorsFile, { presets: ['env'] })

    if (!code) throw Error('Could not read the file')

    // eslint-disable-next-line no-eval, security/detect-eval-with-expression
    const colors: Record<string, any> = eval(code)

    const { ButtonAppearanceStyleGenerator } = await import('./style-generators/index.js')

    const generator = new ButtonAppearanceStyleGenerator(colors)

    const genPath = join(process.cwd(), path)
    generator.generateFile(genPath)

    // eslint-disable-next-line no-console
    console.log(`Generated into ${genPath}`)
  })

command.parse()
