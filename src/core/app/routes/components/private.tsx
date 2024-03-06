import { useAuthStore } from '@/store/auth'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const { token } = useAuthStore((state) => state)
  return token ? <Outlet /> : <Navigate to="/auth/login" />
}

export default PrivateRoute
