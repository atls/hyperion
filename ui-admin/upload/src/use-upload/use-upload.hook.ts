import type { ConfirmMutationResult } from './use-upload.interfaces.js'
import type { UploadMutationResult }  from './use-upload.interfaces.js'
import type { UseUploadProps }        from './use-upload.interfaces.js'

import { GraphQLClient }              from 'graphql-request'

import { confirmMutation }            from './use-upload.mutations.js'
import { uploadMutation }             from './use-upload.mutations.js'

const upload = async (url: string, file: File): Promise<void> => {
  try {
    await fetch(url, {
      method: 'POST',
      body: file,
      headers: {
        'Content-Type': file.type,
      },
    })
    // eslint-disable-next-line no-empty
  } catch {}
}

export const useUpload = ({
  bucket,
  endpoint: defaultEndpoint,
}: UseUploadProps): ((file: File) => Promise<ConfirmMutationResult['confirmUpload']>) => {
  const endpoint = defaultEndpoint ?? 'http://localhost:3000/api'

  const client = endpoint ? new GraphQLClient(endpoint, { credentials: 'include' }) : undefined

  return async (file: File): Promise<ConfirmMutationResult['confirmUpload']> => {
    if (!bucket) return null

    const data = await client?.request<UploadMutationResult>(uploadMutation, {
      input: {
        bucket,
        name: file.name,
        size: file.size,
      },
    })

    if (!data?.createUpload) return null

    const { id, url } = data.createUpload

    await upload(url, file)

    const confirmData = await client?.request<ConfirmMutationResult>(confirmMutation, {
      input: { id },
    })

    return confirmData?.confirmUpload
  }
}
