export const defaultFilename = 'appearance.css.ts'

export const errors = {
  targetPathTrailingSlash: "Path should not end with '/' character",
}

export const getOutdatedFileMessage = (filePath: string): string => `${filePath} is out of date`
