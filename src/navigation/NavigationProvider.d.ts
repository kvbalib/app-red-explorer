export interface INavigationContext {
  canGoBack: boolean
  canGoForward: boolean
  goBack: () => void
  goForward: () => void
  history: string[]
  historyPosIndex: number
  path: string
  setPath: (path: string) => void
}
