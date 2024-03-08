import { authServices } from '@/shared/services/auth'
import { useModalStore } from '@/store/modal'
import { AxiosError } from 'axios'
import { useCallback, useState } from 'react'
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
  const { showModal } = useModalStore()

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = useCallback(
    async (values: FormValues) => {
      const { password, phoneNumber } = values
      setIsLoading(true)
      try {
        const response = await authServices.login(phoneNumber, password)
        console.log(response)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        if (error instanceof AxiosError) {
          showModal({
            title: 'Usuario no registrado',
            description:
              'Los datos ingresados no se encuentran registrados en nuestro sistema.',
            type: 'error',
            isOnlyAceptButton: false,
          })
        }
      }
    },
    [showModal]
  )

  return {
    onSubmit,
    defaultValues,
    isLoading,
  }
}
