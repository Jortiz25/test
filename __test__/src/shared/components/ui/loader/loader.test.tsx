import React from 'react'
import { describe, expect, test } from 'vitest'
import Loader from '../../../../../../src/shared/components/ui/loader/loader'

import { render, screen } from '@testing-library/react'

describe('Loader', () => {
  test('renders loader component with correct elements', () => {
    render(<Loader />)

    const plRings = screen.queryAllByText(/presentation/i)

    const typographyElement = screen.queryAllByText(/cargando.../i)
    expect(typographyElement).toBeDefined()
  })

  test('loader component has correct class', () => {
    const { container } = render(<Loader />)

    expect(container.classList.contains('loader')).toBeDefined()
  })
})
