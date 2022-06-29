export interface IFilesystemItem {
  name: string
  path: string
  type: 'directory' | 'file'
}