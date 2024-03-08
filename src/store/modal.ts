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

  onSussess: (callback: () => void) => void
  showModal: ({
    title,
    description,
    type,
    isOnlyAceptButton,
    onSussess,
  }: ModalProps) => void
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
      showModal: ({ title, description, type, isOnlyAceptButton }) =>
        set(() => ({
          isModalOpen: true,
          title,
          description,
          type,
          isOnlyAceptButton,
        })),

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
