import { useAuthStore } from '@/store/auth'
import { Navigate, Outlet } from 'react-router-dom'

/**
 * Private route component that checks for token and renders either the protected content or redirects to login page.
 *
 * @return {JSX.Element} Rendered content based on token presence
 */
const PrivateRoute = (): JSX.Element => {
  const { token } = useAuthStore((state) => state)
  return token ? <Outlet /> : <Navigate to="/auth" />
}

export default PrivateRoute
