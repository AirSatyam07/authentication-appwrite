import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;