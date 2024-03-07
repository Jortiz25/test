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

/**
 * Render the login form with default values and form validation.
 *
 * @return {JSX.Element} The rendered login form component.
 */
function LoginForm(): JSX.Element {
  const { defaultValues, onSubmit } = useDefaultValues()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: 'all',
  })

  const { formState } = form
  const isFormValid = formState.isValid && formState.isDirty

  return (
    <Form {...form}>
      <form
        autoComplete="off"
        autoCorrect="off"
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
                  autoComplete="off"
                  autoCorrect="off"
                  type="number"
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
                  type="password"
                  autoComplete="off"
                  autoCorrect="off"
                  placeholder="Ingresa tu clave de ingreso a DING"
                  label="Clave"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormFooter isFormValid={isFormValid} />
      </form>
    </Form>
  )
}

export default LoginForm
