import { useModalStore } from '@/store/modal'
import { Backdrop } from './backdrop'

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
        <h3>Modal</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ullam
          inventore temporibus commodi sapiente, molestiae voluptates facere
          repellat nisi laudantium dolorum minima! Magnam corrupti soluta totam
          incidunt nesciunt quisquam libero.
        </p>
        <button
          style={{ color: 'white', background: 'black', outline: 'none' }}
        >
          Close
        </button>
      </div>
    </Backdrop>
  )
}

export default Modal
