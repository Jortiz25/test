import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import Header from '../../../../../src/shared/components/header/header'

describe('Header', () => {
  test('renders header component with back icon', () => {
    render(<Header />)

    const headerElement = screen.getByRole('banner')
    expect(headerElement).toBeDefined()

    const backIconElement = screen.getByAltText('Back icon')
    expect(backIconElement).toBeDefined()
  })

  //   test('back icon has correct class', () => {
  //     render(<Header />)

  //     const backIconElement = screen.getByAltText('Back icon')
  //     expect(backIconElement).toHaveClass('header__back-icon')
  //   })
})
