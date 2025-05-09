import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const DemoDataTable = ({ columns }) => {
    const { users, loading } = useContext(UserContext);
    const [globalFilter, setGlobalFilter] = useState('');

    return (
        <div className="card p-4 shadow-sm mt-md-4 border-0 bdr-rds20">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="mb-0 font-14 font-600">Users</h4>
                <span className="p-input-icon-left">
                    <input
                        type="text"
                        className="p-inputtext p-component"
                        placeholder="Search..."
                        onChange={(e) => setGlobalFilter(e.target.value)}
                    />
                </span>
            </div>

            <DataTable
                value={users}
                paginator
                rows={10}
                stripedRows
                scrollable
                globalFilter={globalFilter}
                emptyMessage={loading ? "Loading..." : "No data found."}
                className="p-datatable-sm"
                responsiveLayout="scroll"
            >
                {columns.map((col, index) => (
                    <Column key={index} field={col.field} header={col.header} />
                ))}
            </DataTable>
        </div>
    );
};

export default DemoDataTable;
