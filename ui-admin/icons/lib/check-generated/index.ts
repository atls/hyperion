import { mkdir }                              from 'node:fs/promises'
import { mkdtemp }                            from 'node:fs/promises'
import { rm }                                 from 'node:fs/promises'
import { join }                               from 'node:path'

import { DirectoryRequiredError }             from './errors/directory-required.error.js'
import { FileRequiredError }                  from './errors/file-required.error.js'
import { GeneratedFilesOutdatedError }        from './errors/generated-files-outdated.error.js'
import { compareDirectories }                 from './comparison/compare-directories.js'
import { compareFiles }                       from './comparison/compare-files.js'
import { checkSuccessMessage }                from './constants.js'
import { generatedIconsDirectoryName }        from './constants.js'
import { generatedReplacementsDirectoryName } from './constants.js'
import { outputLineBreak }                    from './constants.js'
import { packageRootPath }                    from './constants.js'
import { replacementsFileName }               from './constants.js'
import { sourceIconsPath }                    from './constants.js'
import { sourceReplacementsPath }             from './constants.js'
import { sourceSvgPath }                      from './constants.js'
import { temporaryDirectoryPrefix }           from './constants.js'
import { collectFiles }                       from './filesystem/collect-files.js'
import { isDirectory }                        from './filesystem/is-directory.js'
import { isFile }                             from './filesystem/is-file.js'
import { formatFiles }                        from './generation/format-files.js'
import { generateIcons }                      from './generation/generate-icons.js'
import { generateReplacements }               from './generation/generate-replacements.js'

export const checkGenerated = async (): Promise<void> => {
  if (!(await isDirectory(sourceIconsPath))) {
    throw new DirectoryRequiredError(sourceIconsPath)
  }

  if (!(await isDirectory(sourceSvgPath))) {
    throw new DirectoryRequiredError(sourceSvgPath)
  }

  if (!(await isFile(sourceReplacementsPath))) {
    throw new FileRequiredError(sourceReplacementsPath)
  }

  await mkdir(packageRootPath, { recursive: true })

  const temporaryPath = await mkdtemp(join(packageRootPath, temporaryDirectoryPrefix))
  const generatedIconsPath = join(temporaryPath, generatedIconsDirectoryName)
  const generatedReplacementsPath = join(temporaryPath, generatedReplacementsDirectoryName)

  try {
    await mkdir(generatedIconsPath)
    await mkdir(generatedReplacementsPath)

    await generateReplacements(sourceSvgPath, generatedReplacementsPath)
    await generateIcons(sourceSvgPath, generatedIconsPath)
    await formatFiles([
      join(generatedReplacementsPath, replacementsFileName),
      ...(await collectFiles(generatedIconsPath)).map((filePath) =>
        join(generatedIconsPath, filePath)),
    ])

    const outdatedFiles = [
      ...(await compareDirectories({
        actualPath: sourceIconsPath,
        expectedPath: generatedIconsPath,
      })),
      ...(await compareFiles(
        join(generatedReplacementsPath, replacementsFileName),
        sourceReplacementsPath
      )),
    ]

    if (outdatedFiles.length > 0) {
      throw new GeneratedFilesOutdatedError(outdatedFiles)
    }

    process.stdout.write(`${checkSuccessMessage}${outputLineBreak}`)
  } finally {
    await rm(temporaryPath, { force: true, recursive: true })
  }
}
