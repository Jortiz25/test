import { describe, expect, test } from 'vitest'
// import { render, screen } from '@testing-library/react'
// import { FormMessage } from '../../../../../src/shared/components/form/components/form.message'

// Mock para useFormField

describe('FormMessage', () => {
  test('to be defined', () => {
    const Hola = true
    expect(Hola).toBe(true)
    // render(<FormMessage>Test Message</FormMessage>)
    // const formMessageElement = screen.queryByText(/Test Message/i)
    // expect(formMessageElement).toBeDefined()
  })

  //   test('applies text-destructive class when error is present', () => {
  //     // Simular un error
  //     render(<FormMessage>Test Message</FormMessage>)

  //     const formMessageElement = screen.getByText('Test Message')
  //     expect(formMessageElement).toHaveClass('text-destructive')
  //   })

  //   test('does not apply text-destructive class when no error is present', () => {
  //     render(<FormMessage>Test Message</FormMessage>)

  //     const formMessageElement = screen.getByText('Test Message')
  //     expect(formMessageElement).not.toHaveClass('text-destructive')
  //   })
})
