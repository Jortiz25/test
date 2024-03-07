import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import { useModalStore } from '@/store/modal'
import Modal from '@/shared/components/ui/modal/modal'

function RootLayout() {
  const { isModalOpen } = useModalStore()

  useEffect(() => {
    const openPublication = () => {
      if (isModalOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
    openPublication()
  }, [isModalOpen])

  return (
    <div className="container">
      <Navbar />
      <div className="content-container">
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      {isModalOpen && <Modal />}
    </div>
  )
}

export default RootLayout
