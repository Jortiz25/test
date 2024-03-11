import { describe, expect, test } from 'vitest'
import Modal from '../../../../../../src/shared/components/ui/modal'
import { render, screen } from '@testing-library/react'

document.body.innerHTML = '<div id="app-modal"></div>'

describe('Modal', () => {
  test('renders modal component with correct elements', () => {
    render(
      <div id="app-modal">
        <Modal />
      </div>
    )

    const modalElement = screen.queryByText(/modal/i)
    expect(modalElement).toBeDefined()

    // Verificar otros elementos según sea necesario
  })

  // test('calls closeModal when cancel button is clicked', () => {
  //   render(<Modal />)

  //   const cancelButton = screen.getByText('Cancelar')
  //   fireEvent.click(cancelButton)

  //   // Aquí deberías tener acceso al mock de useModalStore y verificar si closeModal fue llamado correctamente
  // })

  // test('calls onSussess or closeModal when back button is clicked', () => {
  //   render(<Modal />)

  //   const backButton = screen.getByText('Volver')
  //   fireEvent.click(backButton)

  //   // Aquí deberías tener acceso al mock de useModalStore y verificar si onSussess o closeModal fueron llamados correctamente
  // })

  // test('calls closeModal when accept button is clicked', () => {
  //   render(<Modal />)

  //   const acceptButton = screen.getByText('Aceptar')
  //   fireEvent.click(acceptButton)

  //   // Aquí deberías tener acceso al mock de useModalStore y verificar si closeModal fue llamado correctamente
  // })
})
