export interface INavigationContext {
  path: string
  setPath: (path: string) => void
  history: string[]
}