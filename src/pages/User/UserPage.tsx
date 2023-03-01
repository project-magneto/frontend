import { Datatable } from '@/components';
import React from 'react'
import './styles/user.css'

export interface UserInterface {}

const UserPage: React.FC<UserInterface> = () => (
    <>
        <h1>Users</h1>
        <Datatable />
    </>
);

export default UserPage;