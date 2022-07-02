export interface IFilesystemItem {
  name: string
  shortName: string
  path: string
  type: 'directory' | 'file'
}
