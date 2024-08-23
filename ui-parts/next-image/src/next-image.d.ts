// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

declare module 'react' {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchPriority?: 'high' | 'low' | 'auto'
  }
}
