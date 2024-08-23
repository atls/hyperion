export type ProgressLinecap = 'round' | 'square'
export type ProgressStringGradients = { [percentage: string]: string }
export type ProgressFromToGradients = { from: string; to: string }
export type ProgressGradient = ProgressStringGradients | ProgressFromToGradients
