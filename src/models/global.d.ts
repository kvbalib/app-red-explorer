import { IPreload } from './Preload'

export {}

declare global {
  interface Window {
    api: IPreload
  }
}