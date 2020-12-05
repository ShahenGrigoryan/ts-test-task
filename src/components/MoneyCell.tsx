import React, {useRef} from "react"
import {ISelectOptions, ITableData} from "../interfaces";
import {Cell} from "react-table"

type MoneyCellProps = {
    cell:  Cell<ITableData, string>,
    setStateData: (data: ITableData[] | ((prevData: ITableData[]) => ITableData[])) => void
}

export const MoneyCell: React.FC<MoneyCellProps> = ({cell, setStateData}) => {

    const selectOptions: ISelectOptions = useRef(
        {
            price_eur: [100, 200, 300, 400, 500],
            price_usd: [100, 200, 300, 400, 500],
            price_sgd: [100, 200, 300, 400, 500],
            price_hkd: [100, 200, 300, 400, 500],
        }
    ).current

    const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>, row: number, column_id: string): void => {
        const value: number = +event.target.value;
        setStateData((prevState: ITableData[]) => {
            const newState: ITableData[] = prevState.map((item: ITableData) => {
                if (item.id !== row) return item;
                return {...item, [column_id]: value}
            })
            return newState;
        })
    }
    return (
        <td {...cell.getCellProps()}>
            <select value={cell.row.values[cell.column.id]}
                    onChange={(event) => onSelectChange(event, cell.row.original.id, cell.column.id)}
                    disabled={!cell.row.original.isAvailable}>
                {
                    selectOptions[cell.column.id].map((optionValue, index) => (
                        <option key={`${cell.row.original.id}__option__${cell.column.id}__${index}`}
                                value={optionValue}>
                            {optionValue}
                        </option>
                    ))
                }
            </select>
        </td>
    )
}