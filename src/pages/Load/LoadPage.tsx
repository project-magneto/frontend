import React, { useEffect } from 'react'

import { Datatable } from '@/components';
import { useCrudStore } from '@/hooks/useCrudStore';
import './styles/load.css'

export interface UserInterface {}

const LoadPage: React.FC<UserInterface> = () => {

    const { rows, loadingData, startLoadingRows } = useCrudStore();

    useEffect(() => {
        startLoadingRows('/api/loads');
    }, [])
    
    return (
    <>
        {
            (loadingData) 
                ? <h1>loading...</h1>
                : (
                    <>
                        <h1>Loads</h1>
                        <Datatable rows={rows} />
                    </>
                )
        }
    </>
    )
};

export default LoadPage;