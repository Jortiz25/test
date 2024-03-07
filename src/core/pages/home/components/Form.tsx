import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/form'
import { Input } from '@/shared/components/ui/input'
import { type FormValues, formSchema, useDefaultValues } from './utils/login'
import FormFooter from './footer'

function LoginForm() {
  const { defaultValues, onSubmit } = useDefaultValues()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="login-input__container"
      >
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Celular</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingresa tu número de celular registrado"
                  label="Celular"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Clave</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingresa tu clave de ingreso a DING"
                  label="Clave"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormFooter />
      </form>
    </Form>
  )
}

export default LoginForm
