export interface TextTransformProps {
  children: string
  upperCase?: boolean
  lowerCase?: boolean
  firstLetter?: boolean
  lastLetter?: boolean
  replace?: [string, string]
  substr?: number | [number, number]
  hideAfter?:number
}
