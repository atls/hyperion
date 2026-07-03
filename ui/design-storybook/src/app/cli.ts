import { runDesignStorybook } from './run.js'

runDesignStorybook(process.argv.slice(2)).catch((error: unknown) => {
  if (error instanceof Error) {
    process.stderr.write(`${error.message}\n`)
  } else {
    process.stderr.write(`${String(error)}\n`)
  }

  process.exitCode = 1
})
