import { Navigate, Route, Routes } from 'react-router-dom';

import { UserRoutes } from './users/UsersRoutes';
import { BookRoutes } from './books/BooksRoutes';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/users" element={<UserRoutes />} />
                <Route path="/books" element={<BookRoutes />} />

                <Route path="/" element={<Navigate to="/users" />} />
            </Routes>
        </>
    );
};
