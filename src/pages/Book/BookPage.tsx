import React, { useEffect } from 'react'

import { Datatable } from '@/components';
import { useCrudStore } from '@/hooks/useCrudStore';
import './styles/book.css'

export interface UserInterface {}

const BookPage: React.FC<UserInterface> = () => {

    const { rows, loadingData, startLoadingRows } = useCrudStore();

    useEffect(() => {
        startLoadingRows('/api/books');
    }, [])
    
    return (
    <>
        {
            (loadingData) 
                ? <h1>loading...</h1>
                : (
                    <>
                        <h1>Books</h1>
                        <Datatable rows={rows} />
                    </>
                )
        }
    </>
    )
};

export default BookPage;