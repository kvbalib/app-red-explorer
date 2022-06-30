import { MouseEventHandler } from 'react'

import { Box } from '@mui/system'
import { FaFile, FaRegFolder } from 'react-icons/fa'

import { ButtonOverlay } from '../ButtonOverlay'
import { IFilesystemItemProps } from './FilesystemItem'
import { useStyles } from './FilesystemItem.styles'

export const FilesystemItem = ({ item, setPath }: IFilesystemItemProps) => {
  const styles = useStyles(null)
  const isDirectory = item.type === 'directory'
  const Icon = isDirectory ? FaRegFolder : FaFile

  const handleSetPath = async () => {
    if (item.type === 'directory') setPath(item.path)
    else await window.api.openFile(item.path)
  }

  const handleRightClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    // TODO: add menu: browse / open / add to bookmarks
  }

  return (
    // @TODO: implement drag and drop
    <ButtonOverlay
      styles={styles.item}
      key={item.name}
      onClick={handleSetPath}
      onRightClick={handleRightClick}
      isDoubleClick
    >
      <Icon size={48} />
      <Box sx={styles.caption} children={item.name} />
    </ButtonOverlay>
  )
}
