import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type ModalProps = {
  title: string
  description: string
  type: 'warning' | 'error'
  isOnlyAceptButton: boolean
  onSussess?: () => void
}

export interface ModalSlice {
  title: string
  description: string
  isModalOpen: boolean
  type: 'warning' | 'error'
  isOnlyAceptButton: boolean

  onSussess?: () => void
  showModal: (payload: ModalProps) => void
  closeModal: () => void
}

export const useModalStore = create<ModalSlice>()(
  persist(
    (set) => ({
      title: '',
      type: 'warning',
      description: '',
      isModalOpen: false,
      isOnlyAceptButton: false,
      onSussess: undefined,
      showModal: ({ title, description, type, isOnlyAceptButton, onSussess }) =>
        set(() => ({
          isModalOpen: true,
          title,
          description,
          type,
          isOnlyAceptButton,
          onSussess,
        })),

      closeModal: () =>
        set(() => ({
          title: '',
          description: '',
          isModalOpen: false,
          type: 'warning',
          onSussess: undefined,
        })),
    }),
    {
      name: 'modal-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
