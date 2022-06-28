export interface IPreload {
  directoryContents: (path: string) => Promise<{ name: string, type: string }[]>
  currentDirectory: () => string
}