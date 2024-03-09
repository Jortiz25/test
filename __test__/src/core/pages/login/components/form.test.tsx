import React from 'react'
import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import LoginForm from '../../../../../../src/core/pages/login/components/Form'

describe('FormFooter', () => {
  test('renders login form with correct elements and labels', async () => {
    render(<LoginForm />)

    const phoneNumberLabel = await screen.findByText('Celular')
    const passwordLabel = await screen.findByText('Clave')
    const phoneNumberInput = await screen.findByPlaceholderText(
      'Ingresa tu número de celular registrado'
    )
    const passwordInput = await screen.findByPlaceholderText(
      'Ingresa tu clave de ingreso a DING'
    )

    expect(phoneNumberLabel).toBeDefined()
    expect(passwordLabel).toBeDefined()
    expect(phoneNumberInput).toBeDefined()
    expect(passwordInput).toBeDefined()
  })

  //   test('displays loader when isLoading is true', async () => {
  //     render(<LoginForm />)

  //     // Simulate isLoading is true
  //     await screen.findByTestId('loader')

  //     const loader = screen.getByTestId('loader')

  //     expect(loader).toBeDefined()
  //   })

  test('Continue button should be disabled when form is invalid', async () => {
    render(<LoginForm />)

    // Expect to find disabled button initially
    const continueButton = await screen.findByText('Continuar')
    expect(continueButton.attributes).toHaveProperty('disabled')
  })

  //   test('Continue button should be enabled when form is valid', async () => {
  //     render(<LoginForm />)

  //     // Fill in the form fields with valid data
  //     const phoneNumberInput = await screen.findByPlaceholderText(
  //       'Ingresa tu número de celular registrado'
  //     )
  //     const passwordInput = await screen.findByPlaceholderText(
  //       'Ingresa tu clave de ingreso a DING'
  //     )
  //     fireEvent.change(phoneNumberInput, { target: { value: '3123456789' } })
  //     fireEvent.change(passwordInput, { target: { value: 'password123' } })

  //     // Expect to find enabled button after valid input
  //     const continueButton = await screen.findByText('Continuar')
  //     expect(continueButton).not.toHaveProperty('disabled')
  //   })
})
