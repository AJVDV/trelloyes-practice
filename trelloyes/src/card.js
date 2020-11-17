import React from "react";

export default function Card(props) {
    return (
        <div className="Card">
            <button type='Card'>
                delete
            </button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}