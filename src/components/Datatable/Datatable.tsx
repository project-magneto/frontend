import React, { useEffect, useState } from 'react'
import { Modal } from '../';
import './styles/datatable.css'

type User = {
    id?: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    address?: string;
    status?: boolean;
};
export interface DatatableInterface {
    rows: Array<User>;
}

const Datatable: React.FC<DatatableInterface> = ({ rows }) => {

    const [ labels, setLabels ] = useState(Array<string>);

    useEffect(() => {
        setLabels(Object.keys(rows[0]));
    }, [])

    return <>
        <div className="actions">
            <button id="add-new">Add New</button>
            <input type="text" id="search" placeholder="Search..."/>
        </div>
        <div className="table-wrapper">
            <table className="data-table">
                <thead>
                    <tr>
                        {labels.map((label, i) => <th key={i}>{ label }</th>)}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row, i) => (
                            <tr key={i}>
                                <td>{row.id}</td>
                                <td>{row.first_name}</td>
                                <td>{row.last_name}</td>
                                <td>{row.email}</td>
                                <td>{row.address}</td>
                                <td>{row.status}</td>
                                <td>
                                    <Modal row={row} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="pagination">
            <a href="#" className="prev">Prev</a>
            <a href="#" className="page active">1</a>
            <a href="#" className="page">2</a>
            <a href="#" className="page">3</a>
            <a href="#" className="next">Next</a>
            </div>
        </div>
    </>
};

export default Datatable;