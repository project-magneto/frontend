import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoadPage } from '@/pages';

export const LoadRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoadPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};