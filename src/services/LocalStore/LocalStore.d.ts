export interface IStorageItem {
  [key: string]: string | number | object
}

export interface IStorage {
  data: IStorageItem | IStorageItem[]
}
