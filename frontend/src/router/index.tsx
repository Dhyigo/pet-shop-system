import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/login/Login';
import { ProtectedRoutes } from './ProtectedRoutes';
import { Home } from '../pages/home/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}
