import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/private'

const Layout = lazy(() => import('../layout'))
const Home = lazy(() => import('../../pages/home'))

// import Auth from '../../pages/auth';
// import PageNotFound from '../../pages/404';

/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The main application component.
 */
const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<span className="text-center">Loading ...</span>}>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<PrivateRoute />}>
              <Route path="/">
                <Route index element={<Home />} />
              </Route>
            </Route>
            <Route path="/auth">
              <Route index path="login" element={<Home />} />
            </Route>
            {/* <Route path='*' element={<PageNotFound />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
