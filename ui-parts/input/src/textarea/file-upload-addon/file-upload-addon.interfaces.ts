import { FC } from 'react'

export interface File {
  name: string
  type: string
  size: number
}

export interface FileItemProps {
  files: File[]
}

export interface LinkPlaceholderProps {
  onClick: (event: any) => any
}

export interface FileUploadLinkProps {
  LinkPlaceholder: FC<LinkPlaceholderProps>
}

export interface FilesUploadedProps {
  FileList: FC<FileItemProps>
}
