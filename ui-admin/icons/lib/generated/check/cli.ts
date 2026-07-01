import { checkSuccessMessage } from './constants.js'
import { outputLineBreak }     from './constants.js'
import { checkGenerated }      from './index.js'

try {
  await checkGenerated()
  process.stdout.write(`${checkSuccessMessage}${outputLineBreak}`)
} catch (error) {
  const errorMessage = error instanceof Error ? (error.stack ?? error.message) : String(error)

  process.stderr.write(`${errorMessage}${outputLineBreak}`)
  process.exitCode = 1
}
