import { dirname }       from 'node:path'
import { resolve }       from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDirectory = dirname(fileURLToPath(import.meta.url))

export const outdatedFileReasons = {
  different: 'different',
  missing: 'missing',
  unexpected: 'unexpected',
} as const

export const packageRootPath = resolve(scriptDirectory, '..')

export const workspaceRootPath = resolve(packageRootPath, '../..')

export const sourceIconsPath = resolve(packageRootPath, 'src/icons')

export const sourceReplacementsPath = resolve(packageRootPath, 'src/replacements.ts')

export const sourceSvgPath = resolve(packageRootPath, 'svg')

export const temporaryDirectoryPrefix = '.atls-ui-admin-icons-'

export const generatedIconsDirectoryName = 'icons'

export const generatedReplacementsDirectoryName = 'replacements'

export const replacementsFileName = 'replacements.ts'

export const yarnCommand = 'yarn'

export const workspaceArgument = 'workspace'

export const iconsGeneratorWorkspace = '@atls-ui-generators/icons'

export const generateIconsCommand = 'generate-icons'

export const generateReplacementsCommand = 'replacements'

export const formatCommand = 'format'

export const iconsPathArgument = '-i'

export const replacementsPathArgument = '-r'

export const relativePathSeparator = '/'

export const outputLineBreak = '\n'

export const checkSuccessMessage = 'Generated icons are up to date'

export const commandFailedMessage = 'Command failed'

export const directoryRequiredMessage = 'Directory is required'

export const fileRequiredMessage = 'File is required'

export const outdatedFilesMessage = 'Generated files are outdated'

export const outdatedFileReasonMessages = {
  [outdatedFileReasons.different]: 'content differs',
  [outdatedFileReasons.missing]: 'missing committed file',
  [outdatedFileReasons.unexpected]: 'unexpected committed file',
}
