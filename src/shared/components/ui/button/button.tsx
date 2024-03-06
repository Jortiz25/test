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
      center = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? 'span' : 'button'
    const combinedClasses = `${center ? 'btn-centered' : ''} ${size} ${variant} ${className ?? ''}`

    return <Comp className={`btn ${combinedClasses}`} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'
export { Button }
