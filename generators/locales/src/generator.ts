import { defaultPaths }     from './locales-generator.constants'
import { mergeLocales }     from './merge-locales'
import { processDirectory } from './process-directory'

const allLocales = []
let outputFile = 'ru'
const argPaths: string[] = []

// @ts-ignore
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
