import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserPage } from '@/pages';

export const UserRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};