import React from 'react'
import { type ButtonProps } from './button.model'
import './button.style.css'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'btn-primary',
      size = 'btn-medium',
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? 'span' : 'button'
    const combinedClasses = `${size} ${variant} ${className ?? ''}`

    return <Comp className={`btn ${combinedClasses}`} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'
export { Button }
