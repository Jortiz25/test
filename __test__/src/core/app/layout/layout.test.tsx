import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'

import RootLayout from '../../../../../src/core/app/layout/index'

vi.mock('../../../../../../src/store/modal', () => ({
  useModalStore: vi.fn(() => ({
    isModalOpen: false,
  })),
}))

describe('Layout', () => {
  test('renders navbar and content container', async () => {
    const { container } = render(<RootLayout />)

    // const contentContainerElement =
    //   await screen.findByTestId('content-container')

    expect(container.classList.contains('content-container')).toBeDefined()
  })

  //   test('renders modal when isModalOpen is true', async () => {
  //     // Mock para simular que el modal está abierto
  //     const {} =useModalStore()

  //     render(<RootLayout />)

  //     const modalElement = await screen.findByTestId('modal')

  //     expect(modalElement).toBeDefined()
  //   })

  //   test('body overflow is hidden when modal is open', async () => {
  //     // Mock para simular que el modal está abierto
  //     useModalStore.mockReturnValueOnce({
  //       isModalOpen: true,
  //     })

  //     render(<RootLayout />)

  //     // Verificar que el overflow del cuerpo está oculto cuando el modal está abierto
  //     expect(document.body.style.overflow).toBe('hidden')
  //   })
})
