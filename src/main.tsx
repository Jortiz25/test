/* v8 ignore start */
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './core/app/routes'
import ErrorBoundary from './shared/components/error'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
/* v8 ignore stop */
