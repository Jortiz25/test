import React from 'react'
import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import FormFooter from '../../../../../../src/core/pages/login/components/footer'

describe('FormFooter', () => {
  test('renders form footer with correct description', async () => {
    render(<FormFooter isFormValid={true} />)

    const descriptionElement = await screen.findByText(
      'Si olvidaste tu clave, ingresa a tu aplicación de DING y realiza el cambio de clave'
    )

    expect(descriptionElement).toBeDefined()
  })

  test('renders form footer with two buttons', async () => {
    render(<FormFooter isFormValid={true} />)

    const continueButton = await screen.findByText('Continuar')
    const cancelButton = await screen.findByText('Cancelar')

    expect(continueButton).toBeDefined()
    expect(cancelButton).toBeDefined()
  })

  test('clicking on Cancel button should not throw an error', async () => {
    render(<FormFooter isFormValid={true} />)

    fireEvent.click(await screen.findByText('Cancelar'))
  })

  // test('Continue button should be disabled when isFormValid is false', async () => {
  //   render(<FormFooter isFormValid={false} />)

  //   const continueButton = await screen.findByText('Continuar')

  //   expect(continueButton.ariaDisabled).toBe(true)
  // })
})
