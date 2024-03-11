import { Button } from '@/shared/components/ui/button'
import { Typography } from '@/shared/components/ui/typography'
import { useModalStore } from '@/store/modal'

function FormFooter({
  isFormValid,
  isCountZero,
}: {
  isFormValid: boolean
  isCountZero: boolean
}) {
  const { showModal } = useModalStore()

  const modelTest = () =>
    showModal({
      title: 'Advertencia',
      description: '¿Estás seguro de cancelar el pago de tu compra?',
      type: 'warning',
      isOnlyAceptButton: false,
    })

  return (
    <section className="form-footer">
      <Typography
        variant="paragraph"
        className="text-center form-footer__description"
      >
        Una vez termine el tiempo, puedes presionar reenvíar código para obtener
        uno nuevo
      </Typography>

      <Button
        center
        variant="btn-primary"
        size="btn-large"
        disabled={!isCountZero ? true : false}
        type="button"
      >
        Reenvíar código
      </Button>
      <Button
        onClick={modelTest}
        center
        variant="btn-primary"
        size="btn-large"
        type="submit"
        disabled={!isFormValid ? true : false}
      >
        Continuar
      </Button>
    </section>
  )
}

export default FormFooter
