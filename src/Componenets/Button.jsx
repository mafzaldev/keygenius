import React from "react";
export default function Button(props) {
    const { text, onClick } = props
    const styles = { width: props.text === "Copy" ? "90px" : "400px" }
    return (
        <button className="button" style={styles} onClick={onClick}>{text}</button>
    )
}