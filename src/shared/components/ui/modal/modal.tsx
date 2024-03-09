import { useModalStore } from '@/store/modal'
import { Backdrop } from './backdrop'
import { Button } from '../button'
import { Typography } from '../typography'

import Danger from '@/assets/danger.png'
import Warning from '@/assets/warning.png'
/**
 * Renders a modal component with the specified title, description, type, and buttons.
 *
 * @return {JSX.Element} The modal component to be rendered.
 */

function Modal(): JSX.Element {
  const { closeModal, title, description, type, onSussess, isOnlyAceptButton } =
    useModalStore()

  return (
    <Backdrop>
      <div className="modal">
        <picture className="modal-image__container">
          <img
            src={type === 'warning' ? Warning : Danger}
            className="modal-image__body"
            alt="logo_modal"
          />
        </picture>
        <Typography variant="h3" size="xl">
          {title}
        </Typography>
        <Typography variant="paragraph" size="sm">
          {description}
        </Typography>
        <section className="modal-content__buttons">
          {isOnlyAceptButton ? (
            <Button
              variant={type === 'warning' ? 'btn-warning' : 'btn-danger'}
              size="btn-medium"
              onClick={closeModal}
            >
              Aceptar
            </Button>
          ) : (
            <>
              <Button
                variant={type === 'warning' ? 'btn-warning' : 'btn-danger'}
                size="btn-medium"
                onClick={onSussess ? onSussess : closeModal}
              >
                Cancelar
              </Button>

              <Button
                variant={type === 'warning' ? 'btn-warning' : 'btn-primary'}
                size="btn-medium"
                onClick={closeModal}
              >
                Volver
              </Button>
            </>
          )}
        </section>
      </div>
    </Backdrop>
  )
}

export default Modal
