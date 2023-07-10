import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../page/Login';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<h1>Hello, world!</h1>} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
