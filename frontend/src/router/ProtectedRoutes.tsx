import { Navigate, Outlet } from 'react-router-dom';
import { authStore } from '../store';

export function ProtectedRoutes() {
  const auth = authStore.get();

  return auth ? <Outlet /> : <Navigate to="/login" />;
}
