import React, { useEffect } from 'react'

import { Datatable } from '@/components';
import { useCrudStore } from '@/hooks/useCrudStore';
import './styles/bookCopies.css'

export interface UserInterface {}

const BookCopiesPage: React.FC<UserInterface> = () => {

    const { rows, loadingData, startLoadingRows } = useCrudStore();

    useEffect(() => {
        startLoadingRows('/api/bookCopies');
    }, [])
    
    return (
    <>
        {
            (loadingData) 
                ? <h1>loading...</h1>
                : (
                    <>
                        <h1>Book copies</h1>
                        <Datatable rows={rows} />
                    </>
                )
        }
    </>
    )
};

export default BookCopiesPage;