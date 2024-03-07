import { Button } from '@/shared/components/ui/button'
import { Typography } from '@/shared/components/ui/typography'
import { useModalStore } from '@/store/modal'

function FormFooter({ isFormValid }: { isFormValid: boolean }) {
  const { showModal } = useModalStore()

  const modelTest = () => showModal()

  return (
    <section className="login-footer">
      <Typography
        variant="paragraph"
        className="text-center login-footer__description"
      >
        Si olvidaste tu clave, ingresa a tu aplicación de DING y realiza el
        cambio de clave
      </Typography>

      <Button
        center
        variant="btn-primary"
        size="btn-large"
        className="w-full"
        disabled={!isFormValid ? true : false}
        type="submit"
      >
        Continuar
      </Button>
      <Button
        onClick={modelTest}
        center
        variant="btn-primary"
        size="btn-large"
        className="w-full"
        type="button"
      >
        Cancelar
      </Button>
    </section>
  )
}

export default FormFooter
