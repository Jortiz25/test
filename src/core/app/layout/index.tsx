import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import { useModalStore } from '@/store/modal'
import Modal from '@/shared/components/ui/modal/modal'
import ModalOpt from '@/shared/components/ui/modal-otp'
import { useModalOptStore } from '@/store/modal-otp'

function RootLayout() {
  const { isModalOpen } = useModalStore()
  const { isModalOptOpen } = useModalOptStore()

  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     closeModalOtp()
  //     closeModal()
  //     // localStorage.clear();
  //   }

  //   window.addEventListener('beforeunload', handleBeforeUnload)

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload)
  //   }
  // }, [closeModalOtp, closeModal])

  useEffect(() => {
    const openPublication = () => {
      if (isModalOpen || isModalOptOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
    openPublication()
  }, [isModalOpen, isModalOptOpen])

  return (
    <div className="container">
      <Navbar />
      <div className="content-container">
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      {isModalOpen && <Modal />}
      {isModalOptOpen && <ModalOpt />}
    </div>
  )
}

export default RootLayout
