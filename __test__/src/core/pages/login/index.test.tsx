import React from 'react'
import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'

import LoginPage from '../../../../../src/core/pages/login/index'

describe('LoginPage', () => {
  test('renders home page component with login form', () => {
    const { container } = render(<LoginPage />)

    expect(container.classList.contains('content-container')).toBeDefined()
  })
})
