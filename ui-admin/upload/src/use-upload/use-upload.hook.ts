import { GraphQLClient }         from 'graphql-request'
import { useMemo }               from 'react'

import { ConfirmMutationResult } from './use-upload.interfaces.js'
import { UploadMutationResult }  from './use-upload.interfaces.js'
import { UseUploadProps }        from './use-upload.interfaces.js'
import { confirmMutation }       from './use-upload.mutations.js'
import { uploadMutation }        from './use-upload.mutations.js'

const upload = async (url: string, file: File) => {
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

export const useUpload = ({ bucket, endpoint: defaultEndpoint }: UseUploadProps) => {
  const endpoint = defaultEndpoint ?? 'http://localhost:3000/api'

  // eslint-disable-next-line consistent-return
  // @ts-expect-error return consistent
  const client = useMemo(() => {
    if (endpoint)
      return new GraphQLClient(endpoint, {
        credentials: 'include',
      })
  }, [endpoint]) as GraphQLClient

  return async (file: File) => {
    if (!bucket) return null

    const data = await client.request<UploadMutationResult>(uploadMutation, {
      input: {
        bucket,
        name: file.name,
        size: file.size,
      },
    })

    if (!data.createUpload) return null

    const { id, url } = data.createUpload

    await upload(url, file)

    const confirmData = await client.request<ConfirmMutationResult>(confirmMutation, {
      input: { id },
    })

    return confirmData.confirmUpload
  }
}
