export interface ITypographyVariants {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph'
  size?: 'md' | 'sm' | 'lg'
  className?: string
  children: React.ReactNode
}

export interface TypographyProps extends ITypographyVariants {
  asChild?: boolean
}
