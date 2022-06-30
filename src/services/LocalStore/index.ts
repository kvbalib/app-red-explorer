import { IStorage } from './LocalStore'

export class LocalStore {
  public static set = <K = IStorage>(key: string, data: K, ttl?: number) => {
    const now = new Date()
    const expiration = ttl ? now.getTime() + ttl : undefined

    window.localStorage.setItem(
      key,
      JSON.stringify({
        data,
        expiration,
      })
    )
  }

  public static get = <K = IStorage>(key: string): K | null => {
    try {
      const storage = window.localStorage.getItem(key)

      if (!storage) return null

      const data = JSON.parse(storage)

      if (data.expiration) {
        const now = new Date()

        if (now.getTime() > data.expiration) {
          window.localStorage.removeItem(key)

          return null
        }
      }

      return data.data
    } catch (error) {
      return null
    }
  }

  public static delete = (key: string) => window.localStorage.removeItem(key)
}
