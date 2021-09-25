import { styleFn } from 'styled-system'

export interface UploadContainerProps {
  isDragActive: boolean
  isDragReject: boolean
  isDragAccept: boolean
  dragActiveStyles?: styleFn
  dragRejectStyles?: styleFn
  dragAcceptStyles?: styleFn
}
