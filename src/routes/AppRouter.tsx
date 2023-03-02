import { Navigate, Route, Routes } from 'react-router-dom';

import { UserRoutes } from './users/UsersRoutes';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/users" element={<UserRoutes />} />

                <Route path="/*" element={<Navigate to="/users" />} />
                <Route path="/" element={<Navigate to="/users" />} />
            </Routes>
        </>
    );
};
