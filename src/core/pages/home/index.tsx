import { Button } from '@/shared/components/ui/button'
import { InputLabel } from '@/shared/components/ui/input'
import { Typography } from '@/shared/components/ui/typography'

function HomePage() {
  return (
    <div className="login-container">
      <section className="w-full">
        <Typography variant="h1" className="text-center login-title">
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

      <InputLabel
        label="Celular"
        placeholder="Ingresa tu número de celular registrado"
      />
      <InputLabel
        label="Clave"
        placeholder="Ingresa tu clave de ingreso a DING"
      />

      <section>
        <Typography variant="paragraph" className="text-center login-footer">
          Si olvidaste tu clave, ingresa a tu aplicación de DING y realiza el
          cambio de clave
        </Typography>
      </section>

      <Button center variant="btn-primary" size="btn-large" className="w-full">
        Continuar
      </Button>
      <Button center variant="btn-primary" size="btn-large" className="w-full">
        Cancelar
      </Button>
    </div>
  )
}

export default HomePage
