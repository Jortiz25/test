import { useEffect } from 'react'
import Form from './components/form'
import { useModalStore } from '@/store/modal'

function OptPage() {
  const { showModal } = useModalStore()

  useEffect(() => {
    const handlePopState = () => {
      showModal({
        title: 'Advertencia',
        description: '¿Estás seguro de cancelar el pago de tu compra?',
        isOnlyAceptButton: false,
        type: 'warning',
      })
    }

    window.addEventListener('onpopstate', handlePopState)

    return () => {
      window.removeEventListener('onpopstate', handlePopState)
    }
  }, [showModal])

  return (
    <div className="login-container">
      <Form />
    </div>
  )
}

export default OptPage
