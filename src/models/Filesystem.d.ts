import { Filetypes } from '../constants/filetypes'

export interface IFilesystemItem {
  name: string
  shortName: string
  path: string
  type: Filetypes
}
