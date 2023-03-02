import { Navigate, Route, Routes } from 'react-router-dom';

import { BookRoutes } from './books/BooksRoutes';
import { BookCopiesRoutes } from './booksCopies/BookCopiesRoutes';
import { UserRoutes } from './users/UsersRoutes';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/books" element={<BookRoutes />} />
                <Route path="/book-copies" element={<BookCopiesRoutes />} />
                <Route path="/users" element={<UserRoutes />} />

                <Route path="/" element={<Navigate to="/users" />} />
            </Routes>
        </>
    );
};
