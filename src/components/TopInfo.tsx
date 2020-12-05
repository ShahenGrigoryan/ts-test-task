import React from "react"
import {ITopInfoData} from "../interfaces";

type TopInfoProps = {
    data: ITopInfoData[]
}
export const TopInfo: React.FC<TopInfoProps> = ({data}) => {

    return (
        <div className="info-container">
            <table>
                <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <th>{item.name}</th>
                        <td>{item.value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}