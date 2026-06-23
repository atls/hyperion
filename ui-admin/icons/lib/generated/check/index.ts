import { mkdir }                              from 'node:fs/promises'
import { mkdtemp }                            from 'node:fs/promises'
import { rm }                                 from 'node:fs/promises'
import { join }                               from 'node:path'

import { FilesOutdatedError }                 from './errors/files-outdated.js'
import { generatedIconsDirectoryName }        from './constants.js'
import { generatedReplacementsDirectoryName } from './constants.js'
import { packageRootPath }                    from './constants.js'
import { replacementsFileName }               from './constants.js'
import { sourceIconsPath }                    from './constants.js'
import { sourceReplacementsPath }             from './constants.js'
import { sourceSvgPath }                      from './constants.js'
import { temporaryDirectoryPrefix }           from './constants.js'
import { compareDirectories }                 from './drift/directory.js'
import { compareFiles }                       from './drift/file.js'
import { formatFiles }                        from './expected/format.js'
import { generateIcons }                      from './expected/icons.js'
import { generateReplacements }               from './expected/replacements.js'
import { requireDirectory }                   from './input/constraints/directory.js'
import { requireFile }                        from './input/constraints/file.js'
import { readInputPathKind }                  from './input/read.js'

export const checkGenerated = async (): Promise<void> => {
  requireDirectory(sourceIconsPath, await readInputPathKind(sourceIconsPath))
  requireDirectory(sourceSvgPath, await readInputPathKind(sourceSvgPath))
  requireFile(sourceReplacementsPath, await readInputPathKind(sourceReplacementsPath))

  await mkdir(packageRootPath, { recursive: true })

  const temporaryPath = await mkdtemp(join(packageRootPath, temporaryDirectoryPrefix))
  const generatedIconsPath = join(temporaryPath, generatedIconsDirectoryName)
  const generatedReplacementsPath = join(temporaryPath, generatedReplacementsDirectoryName)

  try {
    await mkdir(generatedIconsPath)
    await mkdir(generatedReplacementsPath)

    await generateReplacements(sourceSvgPath, generatedReplacementsPath)
    await generateIcons(sourceSvgPath, generatedIconsPath)
    await formatFiles(generatedIconsPath, join(generatedReplacementsPath, replacementsFileName))

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
      throw new FilesOutdatedError(outdatedFiles)
    }
  } finally {
    await rm(temporaryPath, { force: true, recursive: true })
  }
}
