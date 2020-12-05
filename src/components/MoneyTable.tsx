import React, {useMemo} from "react";
import {Table} from "./reusable/Table";
import {AviabilityCell} from "./AviabilityCell";
import {MoneyCell} from "./MoneyCell";
import {Column,CellProps} from "react-table";
import {ITableData} from "../interfaces";

type MoneyTableProps = {
    setStateData: (data: ITableData[] | ((prevData: ITableData[]) => ITableData[])) => void
    stateData: ITableData[]
}

export const MoneyTable: React.FC<MoneyTableProps> = ({stateData, setStateData}) => {

    const columns: Array<Column<ITableData>> = useMemo(() => ([
        {
            Header: 'AVIABILITY',
            accessor: 'aviability',
            Cell: (data: React.PropsWithChildren<CellProps<ITableData, string>>) => {
                return (<AviabilityCell data={data} setStateData={setStateData}/>)
            }
        },
        {
            Header: 'LOCATION',
            accessor: 'location',
            Cell: (data: React.PropsWithChildren<CellProps<ITableData, string>>) => {
                return (
                    <td {...data.cell.getCellProps()} className="second-cell">
                        {data.value}
                    </td>
                )
            }
        },
        {
            Header: 'PRICE, EUR',
            accessor: 'price_eur',
            Cell: (data: React.PropsWithChildren<CellProps<ITableData, string>>) => (
                <MoneyCell cell={data.cell} setStateData={setStateData}/>)
        },
        {
            Header: 'PRICE, USD',
            accessor: 'price_usd',
            Cell: (data: React.PropsWithChildren<CellProps<ITableData, string>>) => (
                <MoneyCell cell={data.cell} setStateData={setStateData}/>)
        },
        {
            Header: 'PRICE, SGD',
            accessor: 'price_sgd',
            Cell: (data: React.PropsWithChildren<CellProps<ITableData, string>>) => (
                <MoneyCell cell={data.cell} setStateData={setStateData}/>)
        },
        {
            Header: 'PRICE, HKD',
            accessor: 'price_hkd',
            Cell: (data: React.PropsWithChildren<CellProps<ITableData, string>>) => (
                <MoneyCell cell={data.cell} setStateData={setStateData}/>)
        },
    ]), [setStateData]);

    return (
        <Table stateData={stateData} dataColumns={columns}/>
    )
}