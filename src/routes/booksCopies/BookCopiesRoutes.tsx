import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BookCopiesPage } from '@/pages';

export const BookCopiesRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<BookCopiesPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};