import { useEffect } from 'react'

/**
 * Hook used to call function once on component mount.
 *
 * @param callback
 */
export const useMount = (callback: () => void) =>
  useEffect(() => callback(), [])
