import { Navigate, Route, Routes } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<h1>Hello, world!</h1>} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
