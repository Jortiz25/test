import React from 'react'
import { describe, expect, test } from 'vitest'
import ErrorBoundary from '../../../../../src/shared/components/error'

import { render, screen, fireEvent } from '@testing-library/react'
describe('ErrorBoundary component', () => {
  test('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Children Component</div>
      </ErrorBoundary>
    )

    const childrenElement = screen.getByText('Children Component')
    expect(childrenElement).toBeDefined()
  })

  //   test('renders error message and reload button when there is an error', () => {
  //     class TestErrorComponent extends React.Component {
  //       componentDidMount() {
  //         throw new Error('Test error')
  //       }

  //       render() {
  //         return null
  //       }
  //     }

  //     render(
  //       <ErrorBoundary>
  //         <TestErrorComponent />
  //       </ErrorBoundary>
  //     )

  //     const errorMessage = screen.getByText(
  //       'estamos realizando cambios en nuestro sitio, por favor recarge la pagina'
  //     )
  //     const reloadButton = screen.queryByText(/Recargar/i)
  //     expect(errorMessage).toBeDefined()
  //     expect(reloadButton).toBeDefined()

  //     // fireEvent.click(reloadButton)
  //     // expect(window.location.reload).toHaveBeenCalled()
  //   })

  //   test('captures and logs error', () => {
  //     class TestErrorComponent extends React.Component {
  //       componentDidMount() {
  //         throw new Error('Test error')
  //       }

  //       render() {
  //         return null
  //       }
  //     }

  //     render(
  //       <ErrorBoundary>
  //         <TestErrorComponent />
  //       </ErrorBoundary>
  //     )

  //     // expect(console.log).toHaveBeenCalled()
  //   })
})
