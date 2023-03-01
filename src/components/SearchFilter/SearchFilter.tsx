import React, { useState } from 'react'
import './styles/searchFilter.css'

type User = {
    id?: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    address?: string;
    status?: boolean;
};

export interface SearchFilterInterface {
    rows: Array<User>
}

const SearchFilter: React.FC<SearchFilterInterface> = ({ rows }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState<any[]>([]);

    const handleSearchInputChange = (event: any) => {
        const query = event.target.value;
        setSearchQuery(query);

        const filtered = rows.filter(row => {
            return row.email?.toLowerCase().includes(query.toLowerCase());
        });
        console.log(filtered);
        setFilteredData(filtered);
    };

    return  <div className="actions">
                <input 
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    placeholder="Search by email"
                />
            </div>
};

export default SearchFilter;
