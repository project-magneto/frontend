import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BookPage } from '@/pages';

export const BookRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<BookPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};