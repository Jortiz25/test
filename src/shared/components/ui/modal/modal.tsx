import { useModalStore } from '@/store/modal'
import { Backdrop } from './backdrop'
import { Button } from '../button'
import { Typography } from '../typography'

import Danger from '@/assets/danger.png'
import Warning from '@/assets/warning.png'

function Modal() {
  const { closeModal, title, description, type, onSussess } = useModalStore()

  return (
    <Backdrop>
      <div className="modal">
        <picture className="modal-image__container">
          <img
            src={type === 'warning' ? Warning : Danger}
            className="modal-image__body"
            alt=""
          />
        </picture>
        <Typography variant="h3" size="xl">
          {title}
        </Typography>
        <Typography variant="paragraph" size="sm">
          {description}
        </Typography>
        <section className="modal-content__buttons">
          <Button
            variant={type === 'warning' ? 'btn-warning' : 'btn-danger'}
            size="btn-medium"
            onClick={() => onSussess(() => console.log('hola'))}
          >
            cancelar
          </Button>
          {type !== 'error' && (
            <Button
              variant={type === 'warning' ? 'btn-warning' : 'btn-primary'}
              size="btn-medium"
              onClick={closeModal}
            >
              volver
            </Button>
          )}
        </section>
      </div>
    </Backdrop>
  )
}

export default Modal
