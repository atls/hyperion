export type ProgressLinecap = 'round' | 'square'
export type ProgressStringGradients = Record<string, string>
export type ProgressFromToGradients = { from: string; to: string }
export type ProgressGradient = ProgressFromToGradients | ProgressStringGradients
