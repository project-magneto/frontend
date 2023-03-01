import React, { useState } from 'react'
import './styles/paginator.css'

export interface PaginatorInterface {
    totalRows: number;
    rowsPerPage: number;
}

const Paginator: React.FC<PaginatorInterface> = ({ totalRows, rowsPerPage }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    const renderPageLinks = () => {
        const pageLinks = [];

        for (let i = 1; i <= totalPages; i++) {
            const isCurrentPage = i === currentPage;
            pageLinks.push(
                <a key={i} className={`page ${isCurrentPage ? 'active' : ''}`} href="#" onClick={() => handlePageClick(i)}>{i}</a>
            );
        }

        return pageLinks;
    }

    return  <div className="pagination">
                <a className={`page ${currentPage === 1 ? 'disabled' : ''}`} href="#" onClick={() => handlePageClick(1)}>First</a>
                <a className={`prev ${currentPage === 1 ? 'disabled' : ''}`} href="#" onClick={() => handlePageClick(currentPage - 1)}>Prev</a>
                {renderPageLinks()}
                <a className={`next ${currentPage === totalPages ? 'disabled' : ''}`} href="#" onClick={() => handlePageClick(currentPage + 1)}>Next</a>
                <a className={`page ${currentPage === totalPages ? 'disabled' : ''}`}href="#" onClick={() => handlePageClick(totalPages)}>Last</a>
            </div>
};

export default Paginator;
