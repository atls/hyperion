import { outputLineBreak } from '../lib/check-generated/constants.js'
import { checkGenerated }  from '../lib/check-generated/index.js'

try {
  await checkGenerated()
} catch (error) {
  const errorMessage = error instanceof Error ? (error.stack ?? error.message) : String(error)

  process.stderr.write(`${errorMessage}${outputLineBreak}`)
  process.exitCode = 1
}
