import { useModalStore } from '@/store/modal'
import { Backdrop } from './backdrop'
import { Button } from '../button'
import { Typography } from '../typography'

function Modal() {
  const { closeModal } = useModalStore()

  return (
    <Backdrop>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation()
          closeModal()
        }}
      >
        <Typography variant="h3" size="xl">
          Modal
        </Typography>
        <Typography variant="paragraph" size="sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ullam
          inventore temporibus commodi
        </Typography>
        <section className="modal-content__buttons">
          <Button variant="btn-danger" size="btn-medium">
            cancelar
          </Button>
          <Button variant="btn-primary" size="btn-medium">
            volver
          </Button>
        </section>
      </div>
    </Backdrop>
  )
}

export default Modal
