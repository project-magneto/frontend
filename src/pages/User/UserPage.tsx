import { Datatable } from '@/components';
import { User } from '@/data/user';
import React from 'react'
import './styles/user.css'

export interface UserInterface {}

const UserPage: React.FC<UserInterface> = () => (
    <>
        <h1>Users</h1>
        <Datatable rows={User} />
    </>
);

export default UserPage;