import { createContext, FC, PropsWithChildren, useEffect, useState } from 'react'

import { INavigationContext } from './NavigationProvider'

const initialState: INavigationContext = {
  canGoBack: false,
  canGoForward: false,
  goBack: () => {},
  goForward: () => {},
  history: ['/'],
  historyPosIndex: 0,
  path: '/',
  setPath: () => {},
}

export const NavigationContext = createContext(initialState)

export const NavigationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [navigationState, setNavigationState] = useState(initialState)

  const setPath = (path: string) => setNavigationState((prev) => {
    const history = [...prev.history, path]
    const historyPosIndex = history.length - 1

    return {
      ...prev,
      canGoBack: historyPosIndex > 0,
      canGoForward: historyPosIndex < history.length - 1,
      history,
      historyPosIndex,
      path,
    }
  })

  const goBack = () => setNavigationState((prev) => {
    const { history, historyPosIndex, canGoBack } = prev

    if (canGoBack) {
      const newIndex = historyPosIndex - 1

      return {
        ...prev,
        canGoBack: newIndex > 0,
        canGoForward: newIndex < history.length - 1,
        historyPosIndex: newIndex,
        path: history[newIndex],
      }
    }

    return prev
  })

  const goForward = () => setNavigationState((prev) => {
    const { history, historyPosIndex, canGoForward } = prev

    if (canGoForward) {
      const newIndex = historyPosIndex + 1

      return {
        ...prev,
        canGoBack: newIndex > 0,
        canGoForward: newIndex < history.length - 1,
        historyPosIndex: newIndex,
        path: history[newIndex],
      }
    }

    return prev
  })

  const goUp = () => setPath(navigationState.path.split('/').slice(0, -1).join('/') || '/')

  return <NavigationContext.Provider value={{ ...navigationState, setPath, goBack, goForward }} children={children} />
}