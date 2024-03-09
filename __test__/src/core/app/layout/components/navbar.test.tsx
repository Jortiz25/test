import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'

import Navbar from '../../../../../../src/core/app/layout/components/navbar'

describe('Navbar', () => {
  test('renders navbar component with header', () => {
    render(<Navbar />)

    const navbarElement = screen.getByRole('navigation')
    expect(navbarElement).toBeDefined()

    const headerElement = screen.getByRole('banner')
    expect(headerElement).toBeDefined()
  })
})
