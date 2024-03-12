import { BackdropOpt } from './backdrop'
import { Button } from '../button'
import { Typography } from '../typography'
import Close from '@/assets/close.png'

import { useModalOptStore } from '@/store/modal-otp'

/**
 * Renders a modal otp component with the specified buttons.
 *
 * @return {JSX.Element} The modal opt component to be rendered.
 */

function ModalOtp(): JSX.Element {
  const { closeModalOtp } = useModalOptStore()

  const onCloseModal = () => {
    closeModalOtp()
  }

  return (
    <BackdropOpt>
      <div className="modal">
        <picture className="modal-image__container--opt">
          <img
            className="modal-image__body"
            alt="logo_modal"
            src={Close}
            onClick={onCloseModal}
          />
        </picture>

        <Typography className="modal-title__opt" variant="paragraph" size="md">
          Selecciona el canal para el envío del código de seguridad.
        </Typography>
        <section className="modal-content__buttons--opt">
          <section>
            <Typography variant="paragraph" size="sm">
              *******1344
            </Typography>
            <Button size="btn-medium" variant="btn-primary">
              Mensaje SMS
            </Button>
          </section>
          <section>
            <Typography variant="paragraph" size="sm">
              ******ales@gmail.com
            </Typography>
            <Button size="btn-medium" variant="btn-primary">
              Correo electrónico
            </Button>
          </section>
          <section>
            <Typography variant="paragraph" size="sm">
              *******1344
            </Typography>
            <Button size="btn-medium" variant="btn-primary">
              WhatsApp
            </Button>
          </section>
        </section>
      </div>
    </BackdropOpt>
  )
}

export default ModalOtp
