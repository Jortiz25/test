import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type ModalProps = {
  sendOtp?: () => void
}

export interface ModalOtpSlice {
  isModalOptOpen: boolean
  sendOtp?: () => void
  showModalOtp: (payload: ModalProps) => void
  closeModalOtp: () => void
}

export const useModalOptStore = create<ModalOtpSlice>()(
  persist(
    (set) => ({
      isModalOptOpen: false,
      sendOtp: undefined,
      showModalOtp: ({ sendOtp }) =>
        set(() => ({
          isModalOptOpen: true,
          sendOtp,
        })),

      closeModalOtp: () =>
        set(() => ({
          isModalOptOpen: false,
          sendOtp: undefined,
        })),
    }),
    {
      name: 'modal-opt-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
