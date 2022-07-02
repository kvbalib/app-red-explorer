import { regExp } from '../../constants/regExp'
import { ui } from '../../constants/ui'

// TODO: add word awareness.
export const truncateFilename = (filename: string, maxLength: number): string => {
  if (filename.length < ui.maxFilenameLength) return filename

  const extension = regExp.fileExtension.exec(filename)?.[1] ?? ''

  return filename.substring(0, maxLength - 1) + '...' + extension
}
