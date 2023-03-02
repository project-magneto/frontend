import React, { useEffect, useState } from 'react'
import { Modal, SearchFilter, Paginator } from '../';
import './styles/datatable.css'
export interface DatatableInterface {
    rows: Array<Object>;
}

const Datatable: React.FC<DatatableInterface> = ({ rows }) => {

    const [ labels, setLabels ] = useState(Array<string>);

    useEffect(() => {
        const labels = Object.keys(rows[0]);
        labels.pop();
        setLabels(labels);
    }, [])

    return <>
        <div style={{'display':'flex', 'justifyContent': 'space-between'}}>
            <Modal row={[]} />
            <SearchFilter rows={rows} />
        </div>
        <div className="table-wrapper">
            <table className="data-table">
                <thead>
                    <tr>
                        {labels.map((label, i) => <th key={i}>{ label }</th>)}
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row, i) => (
                            <tr key={i}>
                                {
                                    labels.map((label) => {
                                        return (
                                                <>
                                                    <td>{row[label]}</td>
                                                </>
                                        )
                                    })
                                }
                                <td>
                                    <div className="toggle-button">
                                        <input type="checkbox" id="toggle" className="toggle-checkbox" defaultChecked={row.status} disabled/>
                                        <label htmlFor="toggle" className="toggle-label"></label>
                                    </div>
                                </td>
                                
                                <td>
                                    <Modal row={row} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Paginator totalRows={rows.length} rowsPerPage={10} />
        </div>
    </>
};

export default Datatable;