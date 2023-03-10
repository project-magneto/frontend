import React, { useEffect } from 'react'

import { Datatable } from '@/components';
import { useCrudStore } from '@/hooks/useCrudStore';
import './styles/user.css'

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