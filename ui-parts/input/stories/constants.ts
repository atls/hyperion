export const appearances = ['primary', 'secondary'] as const

export type AppearanceName = (typeof appearances)[number]

export const shapes = ['sm', 'md', 'lg'] as const

export type ShapeName = (typeof shapes)[number]
