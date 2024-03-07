import { useCallback } from 'react'
import { z } from 'zod'

export const formSchema = z.object({
  phoneNumber: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(2, {
    message: 'Password must be at least 2 characters.',
  }),
})

const defaultValues = {
  phoneNumber: '',
  password: '',
}

export type FormValues = z.infer<typeof formSchema>

export const useDefaultValues = () => {
  const onSubmit = useCallback((values: FormValues) => {
    console.log(values)
  }, [])

  return {
    onSubmit,
    defaultValues,
  }
}
