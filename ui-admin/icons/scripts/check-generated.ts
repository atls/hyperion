import { outputLineBreak } from '../lib/generated/check/constants.js'
import { checkGenerated }  from '../lib/generated/check/index.js'

try {
  await checkGenerated()
} catch (error) {
  const errorMessage = error instanceof Error ? (error.stack ?? error.message) : String(error)

  process.stderr.write(`${errorMessage}${outputLineBreak}`)
  process.exitCode = 1
}
