import { useContext } from 'react'

import { NavigationContext } from '../../navigation'

export const useNavigation = () => useContext(NavigationContext)