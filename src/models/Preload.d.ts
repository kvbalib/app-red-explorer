export interface IPreload {
  directoryContents: (path: string) => Promise<{ name: string, type: 'directory' | 'file' }[]>
  currentDirectory: () => string
}
