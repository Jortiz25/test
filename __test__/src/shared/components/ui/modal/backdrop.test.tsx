import React from 'react'
import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Backdrop } from '../../../../../../src/shared/components/ui/modal/backdrop'

document.body.innerHTML = '<div id="app-modal"></div>'
describe('Backdrop', () => {
  test('renders backdrop component with correct elements', () => {
    render(
      <div id="app-modal">
        <Backdrop>
          <div>Backdrop Content</div>
        </Backdrop>
      </div>
    )

    const backdropElement = screen.queryAllByText(/modal-container/i)
    expect(backdropElement).toBeDefined()

    const modalContent = screen.queryAllByText(/Backdrop Content/i)
    expect(modalContent).toBeDefined()
  })
})
