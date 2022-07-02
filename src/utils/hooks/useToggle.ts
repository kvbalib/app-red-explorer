import { useState } from 'react'

/**
 * Hook used to handle on/off state of an element.
 *
 * @param {boolean} initialVisible
 * @returns {{handleShow: () => void, handleToggle: () => void, handleHide: () => void, isVisible: boolean}}
 */
export const useToggle = (initialVisible = false) => {
  const [isVisible, toggle] = useState(initialVisible)

  const handleToggle = () => toggle((state) => !state)
  const handleShow = () => toggle(true)
  const handleHide = () => toggle(false)

  return {
    handleHide,
    handleShow,
    handleToggle,
    isVisible,
  }
}
