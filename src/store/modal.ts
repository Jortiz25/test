import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface ModalSlice {
  isModalOpen: boolean
  showModal: () => void
  closeModal: () => void
}

export const useModalStore = create<ModalSlice>()(
  persist(
    (set) => ({
      isModalOpen: false,
      showModal: () => set(() => ({ isModalOpen: true })),
      closeModal: () => set(() => ({ isModalOpen: false })),
    }),
    {
      name: 'modal-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
