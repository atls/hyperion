export interface UploadMutationResult {
  createUpload?: {
    id: string
    url: string
  } | null
}

export interface ConfirmMutationResult {
  confirmUpload?: {
    id: string
    url: string
  } | null
}

export interface UseUploadProps {
  bucket?: string
  endpoint?: string
}
