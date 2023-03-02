import { Datatable } from '@/components';
import { User } from '@/data/user';
import React, { useEffect } from 'react'
import './styles/user.css'
import { useCrudStore } from '@/hooks/useCrudStore';

export interface UserInterface {}

const UserPage: React.FC<UserInterface> = () => {

    const { rows, loadingData, startLoadingRows } = useCrudStore();

    useEffect(() => {
        startLoadingRows('/api/users');
    }, [])
    
    return (
    <>
        {
            (loadingData) 
                ? <h1>loading...</h1>
                : (
                    <>
                        <h1>Users</h1>
                        <Datatable rows={rows} />
                    </>
                )
        }
    </>
    )
};

export default UserPage;