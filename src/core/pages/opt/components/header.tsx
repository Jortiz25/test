import { Typography } from '@/shared/components/ui/typography'

function OtpHeader() {
  return (
    <section className="w-full">
      <Typography
        variant="h1"
        size="xl"
        className="text-center form_header-title"
      >
        Pagos PSE de DING
      </Typography>
      <Typography
        variant="paragraph"
        className="text-center form_header-description"
      >
        Por favor ingresa el código de 6 dígitos que te hemos enviado, para
        continuar con tu pago.
      </Typography>
    </section>
  )
}

export default OtpHeader
