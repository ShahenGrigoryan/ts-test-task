import React from "react"
import {useTable, Column} from 'react-table'

type TableProps = {
    stateData: any[]
    dataColumns: Array<Column<any>>
}


export const Table: React.FC<TableProps> = ({stateData, dataColumns,}) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns: dataColumns, data:stateData})

    return (
        <table {...getTableProps()} className="data-table">
            <thead>
            {
                headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {
                                        column.render('Header')
                                    }
                                </th>
                            ))}
                    </tr>
                ))
            }
            </thead>
            <tbody {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <React.Fragment key={cell.getCellProps().key}>
                                    {cell.render("Cell")}
                                </React.Fragment>
                                )
                            )}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}