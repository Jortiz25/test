import { Button } from '@/shared/components/ui/button'
import { Typography } from '@/shared/components/ui/typography'
import { useModalStore } from '@/store/modal'
import { useEffect } from 'react'

function FormFooter({
  isFormValid,
  isCountZero,
}: {
  isFormValid: boolean
  isCountZero: boolean
}) {
  const { showModal } = useModalStore()

  useEffect(() => {
    if (isCountZero) {
      showModal({
        title: 'Código expiró',
        description:
          'No ingresaste el código a tienpo, solicita otro en la opción “Reenvíar código”.',
        type: 'error',
        isOnlyAceptButton: true,
      })
    }
  }, [isCountZero, showModal])

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
