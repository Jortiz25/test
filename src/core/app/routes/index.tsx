import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/private'

const Layout = lazy(() => import('../layout'))
const OptPage = lazy(() => import('../../pages/opt'))

import Auth from '../../pages/login'
import Loader from '@/shared/components/ui/loader/loader'
// import PageNotFound from '../../pages/404';

/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The main application component.
 */

const LoaderScreen = (): JSX.Element => {
  return (
    <div className="loader-screen">
      <Loader />
    </div>
  )
}

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoaderScreen />}>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<PrivateRoute />}>
              <Route path="/">
                <Route index element={<Auth />} />
                {/* <Route path="/opt" element={<OptPage />} /> */}
              </Route>
            </Route>
            <Route path="/auth">
              <Route index element={<Auth />} />
              <Route path="/auth/opt" element={<OptPage />} />
            </Route>
            {/* <Route path='*' element={<PageNotFound />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
