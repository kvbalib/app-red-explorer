import { Box } from '@mui/system'
import { MouseEventHandler } from 'react'
import { FaFile, FaRegFolder } from 'react-icons/fa'

import { Filetypes } from '../../../constants/filetypes'
import { ui } from '../../../constants/ui'
import { ButtonOverlay } from '../ButtonOverlay'
import { IFilesystemItemProps } from './FilesystemItem'
import { useStyles } from './FilesystemItem.styles'

export const FilesystemItem = ({ item, setPath }: IFilesystemItemProps) => {
  const styles = useStyles(null)
  const isDirectory = item.type === Filetypes.Directory
  const Icon = isDirectory ? FaRegFolder : FaFile

  const handleSetPath = async () => {
    if (isDirectory) setPath(item.path)
    else await window.api.openFile(item.path)
  }

  const handleRightClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    // TODO: add menu: browse / open / add to bookmarks hookstate
  }

  // TODO: implement drag & drop
  return (
    <ButtonOverlay
      styles={styles.item}
      key={item.name}
      onClick={handleSetPath}
      onRightClick={handleRightClick}
      isDoubleClick
    >
      <Icon size={ui.fileIconSize} />
      <Box sx={styles.caption} children={item.shortName} />
    </ButtonOverlay>
  )
}
