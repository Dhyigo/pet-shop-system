import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../login/Login';
import { ProtectedRoutes } from './ProtectedRoutes';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<h1>Hello, world!</h1>} />
      </Route>
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
