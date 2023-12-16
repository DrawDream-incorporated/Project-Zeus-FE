import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from '../pages/login/Login';

export default function CommonRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Navigate replace to="/" />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
