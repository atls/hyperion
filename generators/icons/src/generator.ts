import { runExit }                     from 'clipanion'

import { GenerateIconsCommand }        from './commands/index.js'
import { GenerateReplacementsCommand } from './commands/index.js'

runExit([GenerateIconsCommand, GenerateReplacementsCommand])
