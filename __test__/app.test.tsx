import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '@/core/app/routes'

vi.mock('react-router-dom', () => ({
  BrowserRouter: vi.fn(),
  Routes: vi.fn(),
  Route: vi.fn(),
}))

vi.mock('./../layout', () => ({ Layout: vi.fn() }))
vi.mock('../../pages/login', () => ({ Auth: vi.fn() }))
vi.mock('@/shared/components/ui/loader/loader', () => ({ Loader: vi.fn() }))

describe('App component', () => {
  it('renders the Layout component as the root', () => {
    render(<App />)
    const layout = screen.queryByText(/Layout Content/i)
    expect(layout).toBeDefined()
  })
})
