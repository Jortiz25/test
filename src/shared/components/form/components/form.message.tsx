import React from 'react'
import { useFormField } from '@/shared/hooks/useFormField'

export const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={`${error && 'text-destructive text-sm'} ${className}`}
      {...props}
    >
      {body}
    </p>
  )
})
