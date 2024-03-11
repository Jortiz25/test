import { useModalStore } from '@/store/modal'
import { AxiosError } from 'axios'
import { useCallback, useState } from 'react'
import { z } from 'zod'

export const formSchema = z.object({
  otp: z
    .string()
    .max(6, {
      message: 'El codigo OTP debe ser de 6 dígitos',
    })
    .min(5, {
      message: 'El codigo OTP debe ser de 6 dígitos',
    }),
})

const defaultValues = {
  otp: '',
}

export type FormValues = z.infer<typeof formSchema>

export const useDefaultValues = () => {
  const { showModal } = useModalStore()

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = useCallback(
    async (values: FormValues) => {
      const { otp } = values
      setIsLoading(true)
      try {
        console.log(otp)
        // const response = await authServices.login(opt)
        // console.log(response)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        if (error instanceof AxiosError) {
          showModal({
            title: 'Otp incorrecto',
            description:
              'El Código OTP ingresado es incorrecto, por favor intentalo de nuevo',
            type: 'error',
            isOnlyAceptButton: true,
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
