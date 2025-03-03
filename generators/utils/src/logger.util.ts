import type { LevelWithSilentOrString } from 'pino'
import type { Logger }                  from 'pino'

import { pino }                         from 'pino'

export const createLogger = (
  name: string = 'generator-utils',
  level: LevelWithSilentOrString = 'debug'
): Logger =>
  pino({
    name,
    level: process.env.LOG_LEVEL ?? level,
    transport: {
      target: 'pino-pretty',
      options: { colorize: true, translateTime: 'SYS:standard' },
    },
    base: undefined,
  })
