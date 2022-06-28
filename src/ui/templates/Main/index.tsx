import { useEffect } from 'react'

export const Main = () => {

  useEffect(() => console.log(window.api.currentDirectory()), [])

  return (
    <h2>Hello from the other side!</h2>
  )
}