import { useFormField } from '@/shared/hooks/useFormField'
import { forwardRef } from 'react'

export const FormLabel = forwardRef<
  HTMLLabelElement,
  React.HTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <label
      ref={ref}
      className={`${error && 'text-destructive'} ${className}`}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = 'FormLabel'
