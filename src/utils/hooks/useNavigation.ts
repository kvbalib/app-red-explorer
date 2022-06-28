import { useContext } from 'react'

import { NavigationContext } from '../../ui/functional/NavigationProvider'

export const useNavigation = () => useContext(NavigationContext)