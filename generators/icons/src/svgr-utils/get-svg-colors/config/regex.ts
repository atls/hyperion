export const ATTRIBUTE_PATTERN = /[\w:-]+\s*=\s*(["'])(?<value>.*?)\1/g

export const ATTRIBUTE_NAME_PATTERN = /^[\w:-]+/

export const NON_WORD_PATTERN = /[^a-z0-9]/gi

export const STYLE_PROPERTY_PATTERN = /[\w-]+\s*:\s*(?<value>[^;,}]+)/g

export const STYLE_PROPERTY_NAME_PATTERN = /^[\w-]+/
