import { gql } from 'graphql-request'

export const uploadMutation = gql`
  mutation CreateUpload($input: CreateUploadInput!) {
    createUpload(input: $input) {
      id
      url
    }
  }
`

export const confirmMutation = gql`
  mutation ConfirmUpload($input: ConfirmUploadInput!) {
    confirmUpload(input: $input) {
      id
      url
    }
  }
`
