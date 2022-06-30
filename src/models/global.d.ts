import { IPreload } from './Preload'

export {}

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare global {
  interface Window {
    api: IPreload
  }
}
