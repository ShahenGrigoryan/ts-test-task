import React from "react";

type TopBarProps = {
    title: string
    onEditData: () => void
}
export const TopBar: React.FC<TopBarProps> = ({title, onEditData}) => {
    return (
        <div className="top-bar">
            <h2>
                {title}
            </h2>
            <button className="edit-button" onClick={onEditData}>Edit this</button>
        </div>
    )

}