/* eslint-disable no-console */
/* eslint-disable n/no-sync */

import type { ProcessDirectoryType } from './process-directory.interfaces.js'

import { execSync }                  from 'node:child_process'
import { existsSync }                from 'node:fs'
import { readdirSync }               from 'node:fs'
import { join }                      from 'node:path'

import { removeEmptyLocale }         from '../remove-empty-locale/index.js'

export const processDirectory: ProcessDirectoryType = (
  startPath,
  folderName,
  allLocales,
  outputLocale
) => {
  if (!existsSync(startPath)) {
    console.error(new Error(`No directory ${startPath}`))
    return
  }

  const directories = readdirSync(startPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

  directories.forEach((dir) => {
    const localePath = join(startPath, dir)
    if (existsSync(localePath)) {
      const outputFilePath = `${localePath}/${folderName}/${outputLocale}.json`
      const command = `formatjs extract "${localePath}/**/*.tsx" --out-file "${outputFilePath}" --format simple`
      console.log(`Running: ${command}`)
      execSync(command, { stdio: 'inherit' })

      removeEmptyLocale(outputFilePath, localePath, folderName, allLocales)
    }
  })
}
