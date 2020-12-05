import React, {useState} from "react";
import {TopBar} from "./TopBar";
import {TopInfo} from "./TopInfo";
import pageData from "../data/data.json";
import {MoneyTable} from "./MoneyTable";
import {ITableData} from "../interfaces";
import "../styles/styles.css"

export const Main: React.FC = () => {

    const [stateData, setStateData] = useState<ITableData[]>(pageData.table);
    const handleEdit = (): void => {
        console.log(stateData)
    }

    return (
        <>
            <TopBar title={"Seed stats"} onEditData={handleEdit}/>
            <TopInfo data={pageData.info}/>
            <MoneyTable setStateData={setStateData} stateData={stateData}/>
        </>
    )

}