export interface ITypographyVariants {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph'
  size?: 'md' | 'sm' | 'lg' | 'xl'
  className?: string
  id?: string
}

export interface TypographyProps
  extends ITypographyVariants,
    React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> {
  asChild?: boolean
}
