export interface TextTransformProps {
  children: string
  upperCase?: boolean
  lowerCase?: boolean
  firstLetter?: boolean
  lastLetter?: boolean
  substr?: number | [number, number]
  replace?: [string, string]
}
