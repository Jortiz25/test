import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type ModalProps = {
  title: string
  description: string
  type: 'warning' | 'error'
}

export interface ModalSlice {
  title: string
  description: string
  isModalOpen: boolean
  type: 'warning' | 'error'

  onSussess: (callback: () => void) => void
  showModal: ({ title, description, type }: ModalProps) => void
  closeModal: () => void
}

export const useModalStore = create<ModalSlice>()(
  persist(
    (set) => ({
      title: '',
      type: 'warning',
      description: '',
      isModalOpen: false,
      showModal: ({ title, description, type }) =>
        set(() => ({ isModalOpen: true, title, description, type })),
      closeModal: () =>
        set(() => ({
          title: '',
          description: '',
          isModalOpen: false,
          type: 'warning',
        })),

      onSussess: (callback) => {
        set(() => ({
          title: '',
          description: '',
          isModalOpen: false,
          type: 'warning',
        }))
        callback()
      },
    }),
    {
      name: 'modal-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
