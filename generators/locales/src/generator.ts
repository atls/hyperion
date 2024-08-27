import { defaultPaths }     from './locales-generator.constants.js'
import { mergeLocales }     from './merge-locales/index.js'
import { processDirectory } from './process-directory/index.js'

const allLocales: Array<string> = []
let outputFile: string = 'ru'
const argPaths: Array<string> = []

process.argv.slice(2).forEach((arg) => {
  if (!arg.startsWith('--out=')) {
    argPaths.push(arg)
  } else {
    // eslint-disable-next-line prefer-destructuring
    outputFile = arg.split('=')[1]
  }
})
const paths = argPaths.length ? argPaths : defaultPaths

paths.forEach((path) => processDirectory(path, 'locales', allLocales, outputFile))

mergeLocales(allLocales, `./locales/${outputFile}.json`)
