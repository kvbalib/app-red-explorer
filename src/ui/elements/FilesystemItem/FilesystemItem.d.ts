import { IFilesystemItem } from '../../../models/Filesystem'

export interface IFilesystemItemProps {
  item: IFilesystemItem
  setPath: (path: string) => void
}