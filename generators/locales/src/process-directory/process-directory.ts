/* eslint-disable no-console */

import { execSync }             from 'child_process'
import { existsSync }           from 'fs'
import { readdirSync }          from 'fs'
import { join }                 from 'path'

import { ProcessDirectoryType } from './process-directory.interfaces'
import { removeEmptyLocale }    from '../remove-empty-locale'

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
