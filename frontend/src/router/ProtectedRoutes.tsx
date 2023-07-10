import { Navigate, Outlet } from 'react-router-dom';
import { userServices } from '../services/index';

export function ProtectedRoutes() {
  const auth = userServices.isAuthenticated();

  return auth ? <Outlet /> : <Navigate to="/login" />;
}
