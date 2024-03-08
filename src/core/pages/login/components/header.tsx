import { Typography } from '@/shared/components/ui/typography'

function LoginHeader() {
  return (
    <section className="w-full">
      <Typography variant="h1" size="xl" className="text-center login-title">
        Pagos PSE de DING
      </Typography>
      <Typography variant="paragraph" className="text-center login-description">
        Por favor ingresa tu número de celular y la clave con la que normalmente
        ingresas a DING.
      </Typography>
    </section>
  )
}

export default LoginHeader
