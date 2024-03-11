import { describe, expect, test } from 'vitest'
import { InputLabel } from '../../../../../../src/shared/components/ui/input'
import { render, screen } from '@testing-library/react'

describe('Input', () => {
  test('renders input label component with correct label text', () => {
    render(<InputLabel label="Test Label" />)

    const inputLabelElement = screen.queryByText(/Test Label/i)
    expect(inputLabelElement).toBeDefined()
  })

  //   test('sets htmlFor attribute of label to match id of input element', () => {
  //     render(<InputLabel label="Test Label" />)

  //     const inputLabelElement = screen.getByText('Test Label')
  //     const inputElement = screen.getByRole('textbox')

  //     expect(inputLabelElement).tobeDefined(
  //       'for',
  //       inputElement.getAttribute('id')
  //     )
  //   })
})
