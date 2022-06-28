import { createContext, FC, PropsWithChildren, useEffect, useState } from 'react'

import { useMount } from '../../../utils/hooks/useMount'
import { INavigationContext } from './NavigationProvider'

const initialState: INavigationContext = {
  path: '',
  setPath: (path) => {},
  history: []
}

export const NavigationContext = createContext(initialState)

export const NavigationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [pathState, setPathState] = useState(initialState)

  const setPath = (path: string) => setPathState((prev) => {
    console.log(path)
    return { ...prev, path, history: [...prev.history, path] }
  })

  useMount(() => setPath(window.api.currentDirectory()))

  return <NavigationContext.Provider value={{ ...pathState, setPath }} children={children} />
}