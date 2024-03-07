import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/form'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Typography } from '@/shared/components/ui/typography'

const formSchema = z.object({
  phoneNumber: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(2, {
    message: 'Password must be at least 2 characters.',
  }),
})

function HomePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="login-container">
      <section className="w-full">
        <Typography variant="h1" size="xl" className="text-center login-title">
          Pagos PSE de DING
        </Typography>
        <Typography
          variant="paragraph"
          className="text-center login-description"
        >
          Por favor ingresa tu número de celular y la clave con la que
          normalmente ingresas a DING.
        </Typography>
      </section>

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

          <section>
            <Typography
              variant="paragraph"
              className="text-center login-footer"
            >
              Si olvidaste tu clave, ingresa a tu aplicación de DING y realiza
              el cambio de clave
            </Typography>
          </section>

          <Button
            center
            variant="btn-primary"
            size="btn-large"
            className="w-full"
            // disabled
            type="submit"
          >
            Continuar
          </Button>
          <Button
            center
            variant="btn-primary"
            size="btn-large"
            className="w-full"
            type="button"
          >
            Cancelar
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default HomePage
