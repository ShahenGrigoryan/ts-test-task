import React, {useMemo} from "react";
import {ReactComponent as CheckboxActive} from "../assets/images/checkbox-checked.svg";
import {ReactComponent as Checkbox} from "../assets/images/checkbox.svg";
import {ITableData} from "../interfaces";
import {CellProps} from "react-table";

type AviabilityCellProps = {
    data: React.PropsWithChildren<CellProps<ITableData, string>>
    setStateData: (data: ITableData[] | ((prevData: ITableData[]) => ITableData[])) => void
}

export const AviabilityCell: React.FC<AviabilityCellProps> = ({data, setStateData}) => {

    const handleToggleChange = (row: number): void => {
        setStateData((prevState: ITableData[]) => {
            const newState: ITableData[] = prevState.map((item: ITableData) => {
                if (item.id !== row) return item;
                return {
                    ...item,
                    isAvailable: !item.isAvailable,
                    aviability: item.isAvailable ? "NO" : "YES"
                }
            })
            return newState;
        })

    }
    const checkboxComponent: JSX.Element = useMemo(() => data.cell.row.original.isAvailable ?
        (<CheckboxActive className="table-checkbox"/>) :
        (<Checkbox className="table-checkbox"/>), [data])

    return (
        <td {...data.cell.getCellProps()} className="first-cell">
            <label className="checkbox-label">
                <input className="hidden" onChange={() => handleToggleChange(data.cell.row.original.id)} type="checkbox"
                       checked={data.cell.row.original.isAvailable}/>
                {
                    checkboxComponent
                }
                <span style={{fontWeight: data.cell.row.original.isAvailable ? "inherit" : "normal"}}>
                        {data.value}
                </span>
            </label>
        </td>
    )
}