import React from "react";

export default function Checkbox(props) {
    const { id, name, value, isChecked, setCheck } = props
    return (
        <div className="checkbox">
            <input type="checkbox" id={id} name={name} value={value} checked={isChecked} onChange={() => {
                setCheck((prevState) => !prevState)
            }} />
            <label htmlFor={id}>{value}</label>
        </div>
    )
}