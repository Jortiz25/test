import React from 'react'
import { type TypographyProps } from './typography.model'

import './typography.style.css'

/**
 * Renders typography component based on the provided variant and size, with optional additional props.
 *
 * @param {TypographyProps} variant - the variant of the typography component
 * @param {string} size - the size of the typography component
 * @param {object} props - additional props to be spread on the typography component
 * @return {ReactNode} the rendered typography component
 */
const Typography: React.FC<TypographyProps> = ({
  variant = 'paragraph',
  size = 'md',
  children,
  className,
  ...props
}: TypographyProps): JSX.Element => {
  const Component = variant === 'paragraph' ? 'p' : variant

  const fontSizeClass = `font-size-${size}`

  return (
    <Component
      className={`typography ${fontSizeClass} ${className ?? ''}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export { Typography }
