import { useCallback } from 'react'
import { z } from 'zod'

export const formSchema = z.object({
  phoneNumber: z.string().regex(/^3\d{9}$/, {
    message: 'Formato incorrecto de celular',
  }),
  password: z.string().min(6, {
    message: 'La contraseña debe tener al menos 6 caracteres',
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
