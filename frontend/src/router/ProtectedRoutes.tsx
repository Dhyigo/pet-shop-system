import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoutes() {
  const auth = true;

  return auth ? <Outlet /> : <Navigate to="/login" />;
}
