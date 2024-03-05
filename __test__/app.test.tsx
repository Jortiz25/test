import { describe, expect, it } from 'vitest'
import App from '../src/App'

describe('App', () => {
  it('should return a JSX element', () => {
    const result = App()
    expect(result).toBeDefined()
  })
  it('should render the correct JSX', () => {
    const result = App()
    const expected = (
      <div className="container">
        <p className="text-center">PSE-AVANZA</p>
      </div>
    )
    expect(result).toEqual(expected)
  })
})
